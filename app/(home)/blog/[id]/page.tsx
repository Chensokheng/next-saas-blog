import React, { Suspense } from "react";
import Image from "next/image";
import Content from "./components/Content";
import { Database } from "@/lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import { BlogContentLoading } from "./components/Skeleton";

// export async function generateStaticParams() {
// 	// This is the new update
// 	const supabase = createBrowserClient<Database>(
// 		process.env.NEXT_PUBLIC_SUPABASE_URL!,
// 		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// 	);
// 	const { data } = await supabase.from("blog").select("id").limit(10);

// 	return data as any;
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
// 	// This is the new update

// 	const supabase = createBrowserClient<Database>(
// 		process.env.NEXT_PUBLIC_SUPABASE_URL!,
// 		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// 	);
// 	const { data: blog } = await supabase
// 		.from("blog")
// 		.select("*")
// 		.eq("id", params.id)
// 		.single();

// 	return {
// 		title: blog?.title,
// 		authors: {
// 			name: "chensokheng",
// 		},
// 		openGraph: {
// 			title: blog?.title,
// 			url: "https://dailyblog-demo.vercel.app/blog" + params.id,
// 			siteName: "Daily Blog",
// 			images: blog?.image_url,
// 			type: "website",
// 		},
// 		keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
// 	};
// }

export default async function page({ params }: { params: { id: string } }) {
	return <Content blogId={params.id} />;
}
