import Image from "next/image";
import React from "react";
import Content from "./components/Content";

import { IBlog } from "@/lib/types";
import BlogHeader from "./components/BlogHeader";
import { Suspense } from "react";
import { BlogContentLoading, BlogHeaderLoading } from "./components/Skeleton";

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
