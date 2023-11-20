import { createSupabaseServerClient } from "@/lib/supabase/";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
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
		const supabase = await createSupabaseServerClient();

		const { error } = await supabase.auth.exchangeCodeForSession(code);

		if (!error) {
			return NextResponse.redirect(requestUrl.origin);
		}
	}

	// return the user to an error page with instructions
	return NextResponse.redirect("/auth/auth-code-error");
}
