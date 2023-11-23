import HoverUnderLine from "@/components/nav/HoverUnderLine";
import Link from "next/link";
import React from "react";

export default function BlogNav({ path }: { path: string }) {
	return (
		<div className="flex items-center  gap-2">
			<Link href="/dashboard">
				<HoverUnderLine className=" bg-indigo-600 h-[0.8px] cursor-pointer">
					<h1 className="text-sm text-gray-400 flex  items-center gap-2 ">
						/ dashboard
					</h1>
				</HoverUnderLine>
			</Link>
			<h1 className="text-sm text-gray-400 flex  items-center ">
				{path}
			</h1>
		</div>
	);
}
