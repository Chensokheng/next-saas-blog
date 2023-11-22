import { readBlogById } from "@/lib/actions";
import React, { ReactNode } from "react";

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

export default function layout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
