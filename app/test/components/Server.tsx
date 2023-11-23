"use client";
import { IBlog } from "@/lib/types";
import { Database } from "@/lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect, useState } from "react";

export default function Server() {
	const [blog, setBlog] = useState<IBlog[]>([]);
	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const getBlog = async () => {
		const { data } = await supabase.from("blog").select("*");
		setBlog(data as IBlog[]);
	};

	useEffect(() => {
		getBlog();
	}, []);

	return (
		<div>
			<h1>{JSON.stringify(blog, null, 2)}</h1>
		</div>
	);
}
