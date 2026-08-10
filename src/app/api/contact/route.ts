import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { env } from "~/env";
import { contactFormSchema } from "~/lib/contact-schema";
import { checkRateLimit } from "~/lib/rate-limiter";

function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

export async function POST(request: Request) {
  try {
    // 1. Extract IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor
      ? (forwardedFor.split(",")[0]?.trim() ?? "unknown")
      : (realIp ?? "127.0.0.1");

    // 2. Check Rate Limit (5 requests per 15 mins per IP)
    const rateLimit = checkRateLimit(clientIp, 5, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many contact submissions. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON Body
    const body = (await request.json()) as Record<string, unknown>;

    // 4. Honeypot Anti-Spam Check (silent rejection if filled)
    const websiteUrl = typeof body.website_url === "string" ? body.website_url.trim() : "";
    if (websiteUrl !== "") {
      // Return fake success to confuse bots
      return NextResponse.json({
        success: true,
        message: "Message received successfully.",
      });
    }

    // 5. Server-side Zod Schema Validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your form inputs.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Sanitize user inputs for security
    const fullName = sanitizeInput(data.fullName);
    const companyName = sanitizeInput(data.companyName);
    const email = sanitizeInput(data.email);
    const phone = data.phone ? sanitizeInput(data.phone) : "Not Provided";
    const selectedInterest = sanitizeInput(data.selectedInterest);
    const requirement = sanitizeInput(data.requirement);
    const source = data.source ? sanitizeInput(data.source) : "Direct Website Form";

    // 6. Build Branded HTML Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #000000; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 4px solid #000000; box-shadow: 8px 8px 0px #000000; padding: 30px; }
            .header { background-color: #FA9948; border: 2px solid #000000; padding: 20px; margin-bottom: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; color: #000000; }
            .badge { display: inline-block; background: #000000; color: #ffffff; padding: 4px 12px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-top: 5px; }
            .field-group { margin-bottom: 15px; padding-bottom: 12px; border-bottom: 2px solid #f0f0f0; }
            .field-label { font-size: 12px; font-weight: bold; text-transform: uppercase; color: #FA9948; margin-bottom: 4px; }
            .field-value { font-size: 16px; font-weight: bold; color: #000000; word-break: break-word; }
            .message-box { background: #f9f9f9; border: 2px solid #000000; padding: 15px; font-size: 15px; line-height: 1.5; white-space: pre-wrap; margin-top: 8px; }
            .footer { margin-top: 25px; padding-top: 15px; border-top: 2px solid #000000; font-size: 12px; color: #666666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>NEW CONTACT LEAD</h1>
              <span class="badge">Ads Mini Inquiry</span>
            </div>

            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${fullName}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Company Name</div>
              <div class="field-value">${companyName}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #000;">${email}</a></div>
            </div>

            <div class="field-group">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Interest Category</div>
              <div class="field-value" style="color: #FA9948;">${selectedInterest}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Requirement Details</div>
              <div class="message-box">${requirement}</div>
            </div>

            <div class="field-group">
              <div class="field-label">How they heard about Ads Mini</div>
              <div class="field-value">${source}</div>
            </div>

            <div class="footer">
              <p>Submitted via Ads Mini Website Contact Form • IP: ${clientIp} • ${new Date().toISOString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 7. Dispatch Email via SMTP if configured, or Log to console
    const smtpHost = env.SMTP_HOST;
    const smtpPort = env.SMTP_PORT ?? 587;
    const smtpUser = env.SMTP_USER;
    const smtpPass = env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Ads Mini Contact Form" <${smtpUser}>`,
        to: smtpUser,
        replyTo: email,
        subject: `[New Lead - ${selectedInterest}] ${fullName} (${companyName})`,
        text: `New lead from ${fullName} (${email}, ${phone})\nCompany: ${companyName}\nInterest: ${selectedInterest}\nRequirement: ${requirement}`,
        html: htmlTemplate,
      });
    } else {
      // Log lead to console in dev mode or until SMTP env vars are populated
      console.log("--------------------------------------------------");
      console.log("📩 NEW CONTACT FORM LEAD SUBMITTED (DEV LOG):");
      console.log({ fullName, companyName, email, phone, selectedInterest, requirement, source, clientIp });
      console.log("--------------------------------------------------");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to Ads Mini! We will get back to you within 1 business day.",
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    const contactEmail = env.NEXT_PUBLIC_CONTACT_EMAIL ?? env.SMTP_USER;
    return NextResponse.json(
      {
        success: false,
        error: `An unexpected error occurred while processing your request. Please try again or email ${contactEmail} directly.`,
      },
      { status: 500 }
    );
  }
}
