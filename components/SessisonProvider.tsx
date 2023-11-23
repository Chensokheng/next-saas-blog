"use client";
import { useUser } from "@/lib/store/user";
import { Database } from "@/lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect } from "react";

export default function SessisonProvider() {
	const setUser = useUser((state) => state.setUser);

	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	useEffect(() => {
		readSession();
		// eslint-disable-next-line
	}, []);

	const readSession = async () => {
		const { data } = await supabase.from("users").select("*").single();
		setUser(data);
	};

	return <></>;
}
