import React, { Suspense } from "react";
import Image from "next/image";
import Content from "./components/Content";
import { Database } from "@/lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import { BlogContentLoading } from "./components/Skeleton";

export async function generateStaticParams() {
	// This is the new update
	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const { data } = await supabase.from("blog").select("id").limit(10);

	return data as any;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
	// This is the new update

	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const { data: blog } = await supabase
		.from("blog")
		.select("*")
		.eq("id", params.id)
		.single();

	return {
		title: blog?.title,
		authors: {
			name: "chensokheng",
		},
		openGraph: {
			title: blog?.title,
			url: "https://dailyblog-demo.vercel.app/blog" + params.id,
			siteName: "Daily Blog",
			images: blog?.image_url,
			type: "website",
		},
		keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
	};
}

export default async function page({ params }: { params: { id: string } }) {
	// const { data: blog } = (await fetch(
	// 	process.env.SITE_URL + "/api/blog?id=" + params.id
	// ).then((res) => res.json())) as { data: IBlog };
	// This is the new update
	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const { data: blog } = await supabase
		.from("blog")
		.select("*")
		.eq("id", params.id)
		.single();

	if (!blog?.id) {
		return <h1 className="text-white">Not found</h1>;
	}

	return (
		<div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
			<div className="sm:px-10 space-y-5">
				<h1 className=" text-3xl font-bold dark:text-gray-200">
					{blog?.title}
				</h1>
				<p className="text-sm dark:text-gray-400">
					{new Date(blog?.created_at!).toDateString()}
				</p>
			</div>

			<div className="w-full h-96 relative">
				<Image
					priority
					src={blog?.image_url!}
					alt="cover"
					fill
					className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<Suspense fallback={<BlogContentLoading />}>
				<Content blogId={params.id} />
			</Suspense>
		</div>
	);
}
