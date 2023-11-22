import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/lib/types/supabase";

export async function GET(req: Request) {
	const cookieStore = cookies();

	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	const supabase = createServerClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					cookieStore.set({ name, value, ...options });
				},
				remove(name: string, options: CookieOptions) {
					cookieStore.set({ name, value: "", ...options });
				},
			},
		}
	);
	const blogRef = supabase.from("blog").select("*");

	if (id) {
		const data = await blogRef.eq("id", id).single();
		return Response.json({ ...data }, { status: 200 });
	} else {
		const data = await blogRef;
		return Response.json({ ...data }, { status: 200 });
	}
}
