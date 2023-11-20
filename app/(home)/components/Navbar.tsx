import React from "react";
import HoverUnderLine from "./HoverUnderLine";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Navbar() {
	return (
		<nav className="w-full justify-between items-center flex p-5 xl:p-0">
			<HoverUnderLine>
				<Link href={"/"} className="font-bold text-2xl">
					DailyMedia
				</Link>
			</HoverUnderLine>
			<LoginForm />
		</nav>
	);
}
