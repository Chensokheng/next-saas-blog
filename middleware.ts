import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import path from "path";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return request.cookies.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value,
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value,
						...options,
					});
				},
				remove(name: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value: "",
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value: "",
						...options,
					});
				},
			},
		}
	);

	await supabase.auth.getSession();

	const { data } = await supabase.auth.getSession();

	if (data.session) {
		if (
			// protect this page only admin can access this /dashboard/members
			/^\/dashboard(\/.*)?$/.test(pathname) &&
			data.session.user.user_metadata.role !== "admin"
		) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	} else {
		if (/^\/dashboard(\/.*)?$/.test(pathname)) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
