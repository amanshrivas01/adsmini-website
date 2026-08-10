import { NextResponse, type NextRequest } from "next/server";
import { filterBlogs, getAllBlogsFromSanity } from "~/lib/blogs-data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") ?? undefined;
    const search = searchParams.get("search") ?? undefined;

    const allPosts = await getAllBlogsFromSanity();
    const posts = filterBlogs(allPosts, category, search);

    return NextResponse.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching blogs API:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error fetching blogs" },
      { status: 500 }
    );
  }
}

