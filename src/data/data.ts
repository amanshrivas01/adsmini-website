export interface GTagConfig {
  /** Default Google Tag IDs loaded on all pages (e.g., GA4 ID, Google Ads Tag) */
  defaultTags: string[];
  /** Route-specific Google Tag IDs (e.g., specific conversion tag on /contact or /services/digital-marketing) */
  pageTags: Record<string, string[]>;
  /**
   * "merge": load pageTags alongside defaultTags on that page
   * "replace": load only pageTags on that specific page
   */
  mode?: "merge" | "replace";
}

export interface PageMetadataItem {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export interface SiteCTAItem {
  label: string;
  href: string;
  isTel?: boolean;
  isMailto?: boolean;
  isExternal?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  variant?: "tangerine" | "white";
}

export interface SiteConfig {
  siteName: string;
  baseUrl: string;
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    whatsappHref: string;
    address?: string;
    businessHours?: string;
    socials: {
      instagram: string;
      linkedin: string;
    };
  };
  gtag: GTagConfig;
  metadata: {
    default: PageMetadataItem;
    pages: Record<string, PageMetadataItem>;
  };
  ctas: {
    heroPrimary: SiteCTAItem;
    heroSecondary: SiteCTAItem;
    globalConsultation: SiteCTAItem;
    digitalAudit: SiteCTAItem;
    hiringBrief: SiteCTAItem;
    talkToTeam: SiteCTAItem;
  };
  content: {
    hero: {
      badge1: string;
      badge2: string;
      subheadline: string;
    };
    stats: StatItem[];
  };
}

export const siteConfig: SiteConfig = {
  siteName: "Ads Mini",
  baseUrl: "https://www.adsmini.com",

  // 1. Contact & Social Channels
  contact: {
    phone: "+91 8519022399",
    phoneHref: "tel:+918519022399",
    email: "contact@adsmini.com",
    emailHref: "mailto:contact@adsmini.com",
    businessHours: "Monday to Friday, 11:00 AM – 8:00 PM IST",
    whatsappNumber: "918519022399",
    whatsappDefaultMessage: "Hello AdsMini, I would like to inquire about your services!",
    whatsappHref: "https://wa.me/918519022399?text=Hello%20AdsMini%2C%20I%20would%20like%20to%20inquire%20about%20your%20services!",
    socials: {
      instagram: "https://www.instagram.com/adsmini_meme?igsh=NWx0YXp3dXlyOXZz&utm_source=qr",
      linkedin: "https://www.linkedin.com/company/adsmini/",
    },
  },

  // 2. Flexible Google Analytics / GTag Configuration
  gtag: {
    // Default global tags loaded across the entire site
    // Replace 'G-XXXXXXXXXX' with your real Google Analytics 4 (GA4) or Google Ads tag
    defaultTags: [
      process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX",
    ],
    // Specific page conversion or tracking tags (e.g. Google Ads lead conversion on contact)
    pageTags: {
      // Examples:
      // "/contact": ["AW-XXXXXXXXX/AbC-D_efGhIjK"],
      // "/services/digital-marketing": ["AW-YYYYYYYYY"],
      // "/services/recruitment": ["AW-ZZZZZZZZZ"],
    },
    mode: "merge",
  },

  // 3. Centralized SEO Metadata for all routes
  metadata: {
    default: {
      title: "Ads Mini | Digital Marketing & Recruitment Agency",
      description:
        "Ads Mini is a full-service digital marketing and recruitment agency. We help businesses grow their online presence and find the right talent, under one roof. 400+ clients served.",
      keywords: [
        "digital marketing agency",
        "recruitment agency",
        "SEO services",
        "performance marketing",
        "talent acquisition",
        "growth strategy",
        "Ads Mini",
      ],
      ogImage: "/android-chrome-192x192.png",
    },
    pages: {
      "/": {
        title: "Ads Mini | Digital Marketing & Recruitment Agency",
        description:
          "Ads Mini is a full-service digital marketing and recruitment agency. We help businesses grow their online presence and find the right talent, under one roof. 400+ clients served.",
      },
      "/about": {
        title: "About Us | Ads Mini",
        description:
          "Learn about Ads Mini, our journey, our leadership team, and how we deliver seamless digital marketing and recruitment solutions for businesses across India and international markets.",
      },
      "/services": {
        title: "Our Services | Digital Marketing & Recruitment | Ads Mini",
        description:
          "Explore Ads Mini's comprehensive services in Performance Marketing, SEO, Social Media, Full-Cycle Recruitment, Executive Search, and Integrated Growth Strategies.",
      },
      "/services/digital-marketing": {
        title: "Digital Marketing Services | SEO, PPC & Growth | Ads Mini",
        description:
          "Data-driven digital marketing solutions: SEO, Google Ads, Meta Ads, social media marketing, content marketing, conversion rate optimization, and tracking setup.",
      },
      "/services/recruitment": {
        title: "Recruitment & Talent Acquisition Solutions | Ads Mini",
        description:
          "End-to-end recruitment services: Executive Search, IT & Non-IT staffing, bulk hiring drives, campus placements, and flexible contract workforce management.",
      },
      "/work": {
        title: "Our Work & Client Case Studies | Ads Mini",
        description:
          "Explore our proven track record: real campaign data, conversion metrics, and hiring successes across e-commerce, tech, healthcare, hospitality, and enterprise sectors.",
      },
      "/blogs": {
        title: "Insights & Articles | Ads Mini Blog",
        description:
          "Latest insights, actionable strategies, and guides on performance marketing, modern SEO, recruitment trends, and business scaling from the Ads Mini team.",
      },
      "/contact": {
        title: "Contact Us | Schedule a Consultation | Ads Mini",
        description:
          "Get in touch with Ads Mini. Request a free digital presence audit, submit a hiring brief, or book a direct consultation with our leadership team.",
      },
      "/privacy-policy": {
        title: "Privacy Policy | Ads Mini",
        description:
          "Ads Mini's commitment to transparency, data protection, and privacy compliance. Read how we handle personal information, analytics, and client data.",
      },
    },
  },

  // 4. Global & Page Call-To-Action Buttons
  ctas: {
    heroPrimary: {
      label: "Explore Our Services",
      href: "/services",
    },
    heroSecondary: {
      label: "Connect Now",
      href: "tel:+918519022399",
      isTel: true,
    },
    globalConsultation: {
      label: "Schedule a Free Consultation",
      href: "/contact",
    },
    digitalAudit: {
      label: "Request a Free Digital Audit",
      href: "/services/digital-marketing",
    },
    hiringBrief: {
      label: "Submit a Hiring Brief",
      href: "/services/recruitment",
    },
    talkToTeam: {
      label: "Talk to Our Team",
      href: "/contact",
    },
  },

  // 5. Client-Editable Key Site Texts
  content: {
    hero: {
      badge1: "WE BUILD BRANDS",
      badge2: "WE BUILD TEAMS",
      subheadline:
        "Ads Mini is a full-service digital marketing and recruitment agency. You bring the ambition, we bring the visibility to get you noticed and the people to help you deliver on it. All under one roof.",
    },
    stats: [
      {
        value: "6+",
        label: "Years of Experience",
        variant: "white",
      },
      {
        value: "400+",
        label: "Clients Served",
        variant: "tangerine",
      },
      {
        value: "10,000+",
        label: "Campaigns Managed",
        variant: "white",
      },
      {
        value: "MULTI\nNATIONAL",
        label: "Client Base",
        variant: "tangerine",
      },
    ],
  },
};
