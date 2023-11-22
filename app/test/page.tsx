"use client";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect } from "react";

export default function Page() {
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const readdd = async () => {
		await supabase.from("blog").select("*").eq("id", "2222").single();
	};
	useEffect(() => {
		readdd();
	}, []);

	return <div>page</div>;
}
