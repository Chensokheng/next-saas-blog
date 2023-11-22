import Image from "next/image";
import React from "react";
import Content from "./components/Content";

import BlogHeader from "./components/BlogHeader";
import { Suspense } from "react";
import { BlogContentLoading, BlogHeaderLoading } from "./components/Skeleton";
import { readBlogById } from "@/lib/actions";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { data: blog } = await readBlogById(params.id);

	return {
		title: blog?.title,
		authors: {
			name: "chensokheng",
		},
		openGraph: {
			title: blog?.title,
			url: "https://dailyblog-demo.vercel.app/blog/" + params.id,
			siteName: "Daily Blog",
			images: blog?.image_url,
			type: "website",
		},
		keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
	};
}

export default function page({ params }: { params: { id: string } }) {
	return (
		<div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
			<Suspense fallback={<BlogHeaderLoading />}>
				<BlogHeader id={params.id} />
			</Suspense>
			<Suspense fallback={<BlogContentLoading />}>
				<Content blogId={params.id} />
			</Suspense>
		</div>
	);
}
