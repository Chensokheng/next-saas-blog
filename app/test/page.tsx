import { fetchCacheSupabase } from "@/lib/supabase/test";
import React from "react";
import { cookies } from "next/headers";
export default async function page() {
	const authToken = cookies().get(
		"sb-yymdoqdtmbfsrfydgfef-auth-token"
	)?.value;

	const data = await fetchCacheSupabase(
		"/blog?select=*&is_published=eq.true&order=created_at.asc",
		authToken!
	);
	return <div>{JSON.stringify(data)}</div>;
}
