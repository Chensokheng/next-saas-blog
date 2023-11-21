"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/store/user";

import {
	BackpackIcon,
	DashIcon,
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
	const user = useUser((state) => state.user);
	const setUser = useUser((state) => state.setUser);

	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
	};

	const handleLogout = async () => {
		await supabase.auth.signOut();
		setUser(undefined);
	};

	if (user?.id) {
		return (
			<Popover>
				<PopoverTrigger>
					<Image
						src={user.user_metadata?.avatar_url}
						alt={user.user_metadata?.user_name}
						width={50}
						height={50}
						className="rounded-full ring-2 ring-green-500"
					/>
				</PopoverTrigger>
				<PopoverContent
					className="space-y-3 divide-y p-2"
					side="bottom"
				>
					<div className="px-4">
						<p className="text-sm">
							{user.user_metadata?.user_name}
						</p>
						<p className="text-sm text-gray-500">
							{user.user_metadata?.email}
						</p>
					</div>

					<Button
						variant="ghost"
						className="w-full flex justify-between items-center"
					>
						billing <BackpackIcon />
					</Button>
					{user.user_metadata?.role === "admin" && (
						<Link href="/dashboard">
							<Button
								variant="ghost"
								className="w-full flex justify-between items-center"
							>
								Dashboard <DashboardIcon />
							</Button>
						</Link>
					)}

					<Button
						variant="ghost"
						className="w-full flex justify-between items-center"
						onClick={handleLogout}
					>
						Log out <LockOpen1Icon />
					</Button>
				</PopoverContent>
			</Popover>
		);
	}

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
