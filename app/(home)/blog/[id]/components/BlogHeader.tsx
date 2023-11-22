import { readBlogById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

export default async function BlogHeader({ id }: { id: string }) {
	const { data: blog } = await readBlogById(id);

	return (
		<>
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
					src={blog?.image_url!}
					alt="cover"
					fill
					className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
				/>
			</div>
		</>
	);
}
