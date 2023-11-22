import React from "react";
import BlogTable from "./blog/components/BlogTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Blog() {
	return (
		<div className="space-y-5">
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold">Blogs</h1>
				<Link href="/dashboard/blog/create">
					<Button
						className="flex items-center gap-2 "
						variant="outline"
					>
						Create <PlusIcon />
					</Button>
				</Link>
			</div>

			<BlogTable />
		</div>
	);
}
