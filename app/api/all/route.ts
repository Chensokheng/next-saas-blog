import { createSupabaseServerClient } from "@/lib/supabase";
import { Database } from "@/lib/types/supabase";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
	const supabase = await createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");

	if (query) {
		const result = await supabase.from("blog").select(query!);
		return Response.json({ ...result });
	}

	return Response.json({});
}
