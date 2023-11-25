import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { Database } from "@/lib/types/supabase";
export async function GET(request: Request) {
	const requestUrl = new URL(request.url);
	const isAuth = cookies().get("supabase-auth-token");

	if (isAuth) {
		return NextResponse.redirect(requestUrl.origin);
	}

	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");
	const next = searchParams.get("next") ?? "/";

	if (code) {
		const cookieStore = cookies();
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

		const { error } = await supabase.auth.exchangeCodeForSession(code);

		if (!error) {
			return NextResponse.redirect(requestUrl.origin + next);
		}
	} else {
		console.log("no code?");
	}

	// return the user to an error page with instructions
	return NextResponse.redirect(requestUrl.origin + "/auth/error");
}
