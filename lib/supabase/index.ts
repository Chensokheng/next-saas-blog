"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/lib/types/supabase";
import { createClient } from "@supabase/supabase-js";

export async function createSupabaseServerClient() {
	const cookieStore = cookies();
	return createServerClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
			},
		}
	);
}

export async function createSupbaseAdmin() {
	return createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.SERVICE_ROLE!,
		{
			auth: {
				autoRefreshToken: false,
				persistSession: false,
			},
		}
	);
}

export async function fetchCacheSupabase(query: string) {
	const cookieStore = cookies();

	const authToken = cookieStore.get(
		"sb-yymdoqdtmbfsrfydgfef-auth-token"
	)?.value;

	let headers = {};
	if (authToken) {
		const { access_token } = JSON.parse(authToken);
		headers = {
			Authorization: `Bearer ${access_token}`,
		};
	}

	const res = await fetch(
		process.env.NEXT_PUBLIC_SUPABASE_URL! + "/rest/v1/" + query,
		{
			headers: {
				apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
				...headers,
			},
			cache: "force-cache",
		}
	);
	return await res.json();
}
