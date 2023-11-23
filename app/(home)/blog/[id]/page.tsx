import React from "react";

import BlogHeader from "./components/BlogHeader";
import { Suspense } from "react";
import { BlogHeaderLoading } from "./components/Skeleton";
import { IBlog } from "@/lib/types";

export async function generateStaticParams() {
	return [{ id: "1" }, { id: "2" }];
}

export async function generateMetadata({ params }: { params: { id: string } }) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const data = await fetch(
		"https://jsonplaceholder.typicode.com/todos/" + params.id
	)
		.then((response) => response.json())
		.then((json) => json);

	return {
		title: data?.title,
		authors: {
			name: "chensokheng",
		},
		keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
	};
}

export default async function page({ params }: { params: { id: string } }) {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/todos/" + params.id
	);
	const data = await res.json();

	return (
		<div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
			{JSON.stringify(data, null, 2)}
			{/* <Suspense fallback={<BlogContentLoading />}> */}
			{/* <Content blogId={params.id} /> */}
		</div>
	);
}
