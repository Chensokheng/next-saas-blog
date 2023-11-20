import React from "react";
import HoverUnderLine from "./HoverUnderLine";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
	return (
		<nav className="w-full justify-between items-center flex p-5 xl:p-0">
			<HoverUnderLine>
				<Link href={"/"} className="font-bold text-2xl">
					DailyMedia
				</Link>
			</HoverUnderLine>
			<Button className="flex items-center gap-2" variant="outline">
				<GitHubLogoIcon /> Login
			</Button>
		</nav>
	);
}
