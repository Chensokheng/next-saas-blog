import Image from "next/image";
import React, { FC } from "react";
import MarkdownPreview from "@/app/components/MarkdownPreview";
import { readBlogById, readBlogIds } from "@/lib/actions";
import { IBlogDetial } from "@/lib/types";

export default async function page({ params }: { params: { id: string } }) {
	const { data: blog } = (await readBlogById(params.id)) as {
		data: IBlogDetial;
	};

	return (
		<div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
			<div className="sm:px-10 space-y-5">
				<h1 className=" text-3xl font-bold dark:text-gray-200">
					{blog?.title}
				</h1>
				<p className="text-sm dark:text-gray-400">{blog?.created_at}</p>
			</div>

			<div className="w-full h-96 relative">
				<Image
					src={blog?.image_url!}
					alt="cover"
					fill
					className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
				/>
			</div>
			<MarkdownPreview content={blog?.blog_content?.content || ""} />
		</div>
	);
}
