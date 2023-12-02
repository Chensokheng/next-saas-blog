export async function fetchCacheSupabase(query: string, authToken: string) {
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
