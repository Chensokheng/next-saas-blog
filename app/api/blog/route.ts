import readBlog from "@/app/dashboard/blog/actions";
import { NextResponse } from "next/server";

export async function GET() {
	const { data } = await readBlog();
	return NextResponse.json({ data });
}
