"use server";

import { createSupabaseServerClient } from "../supabase";

export async function readUsers() {
	const supabase = await createSupabaseServerClient();
	return supabase
		.from("users")
		.select("*")
		.order("created_at", { ascending: true });
}
