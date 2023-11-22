import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { readBlog } from "@/lib/actions";
import BlogList from "./components/BlogList";
import BlogListLoading from "./components/BlogListLoading";

export default function Home() {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
			<Suspense fallback={<BlogListLoading />}>
				<BlogList />
			</Suspense>
		</div>
	);
}
