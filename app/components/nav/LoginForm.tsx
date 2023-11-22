"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/store/user";

import {
	BackpackIcon,
	DashboardIcon,
	GitHubLogoIcon,
	LockOpen1Icon,
} from "@radix-ui/react-icons";
import { createBrowserClient } from "@supabase/ssr";
import Image from "next/image";
import React from "react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function LoginForm() {
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
	};

	return (
		<Button
			className="flex items-center gap-2"
			variant="outline"
			onClick={handleLogin}
		>
			<GitHubLogoIcon /> Login
		</Button>
	);
}
