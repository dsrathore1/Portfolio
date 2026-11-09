import { NextResponse } from "next/server";
import { getGithubPortfolio } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  const data = await getGithubPortfolio();
  return NextResponse.json(data, {
    status: data.ok ? 200 : 502,
    headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" },
  });
}
