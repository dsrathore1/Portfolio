import { NextResponse } from "next/server";
import { getHashnodePosts } from "@/lib/hashnode";

export const revalidate = 1800;

export async function GET() {
  const data = await getHashnodePosts();
  return NextResponse.json(data, {
    status: data.ok ? 200 : 502,
    headers: { "Cache-Control": "s-maxage=1800, stale-while-revalidate=86400" },
  });
}
