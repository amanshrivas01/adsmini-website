import { NextResponse, type NextRequest } from "next/server";
import { getBlogBySlugFromSanity } from "~/lib/blogs-data";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const post = await getBlogBySlugFromSanity(slug);

    if (!post) {
      return NextResponse.json(
        { success: false, message: `Blog post '${slug}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Error fetching single blog API:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

