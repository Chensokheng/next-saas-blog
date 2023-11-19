import Image from "next/image";
import React from "react";
import MarkdownPreview from "./components/MarkdownPreview";
import { blogMarkdown } from "./data";

export default function page() {
	const blog = {
		title: "Unleashing Creativity: The Surprising Benefits of Doodling",
		image_url:
			"https://images.unsplash.com/photo-1700164805522-c3f2f8885144?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "2023-10-05",
	};

	return (
		<div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
			<div className="sm:px-10 space-y-5">
				<h1 className=" text-3xl font-bold dark:text-gray-200">
					{blog.title}
				</h1>
				<p className="text-sm dark:text-gray-400">{blog.date}</p>
			</div>

			<div className="w-full h-96 relative">
				<Image
					src={blog.image_url}
					alt="cover"
					fill
					className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
				/>
			</div>
			<MarkdownPreview content={blogMarkdown} />
		</div>
	);
}
