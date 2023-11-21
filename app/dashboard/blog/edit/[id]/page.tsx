"use client";
import React from "react";

import { toast } from "@/components/ui/use-toast";
import { IBlog } from "@/lib/types";
import BlogForm from "../../components/BlogForm";
import { blogs } from "@/lib/data";

export default function EditForm({ params }: { params: { id: string } }) {
	const blog = blogs.filter((blog) => blog.id === params.id)[0];

	const onHandleSubmit = (data: {
		title: string;
		content: string;
		image_url: string;
	}) => {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	};

	return <BlogForm onHandleSubmit={onHandleSubmit} defaultBlog={blog} />;
}
