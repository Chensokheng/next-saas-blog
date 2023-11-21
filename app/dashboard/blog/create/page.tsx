"use client";
import React from "react";

import { toast } from "@/components/ui/use-toast";
import { defaultCreateBlog } from "@/lib/data";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import BlogForm from "../components/BlogForm";
import { createBlog } from "../actions";

export default function CreateForm() {
	const onHandleSubmit = async (data: {
		content: string;
		title: string;
		image_url: string;
		is_premium: boolean;
		is_published: boolean;
	}) => {
		const result = JSON.parse(await createBlog(data));

		const { error } = result as PostgrestSingleResponse<null>;
		if (error?.message) {
			toast({
				title: "Fail to create a post 😢",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">{error.message}</code>
					</pre>
				),
			});
		} else {
			toast({
				title: "Successfully create a post 🎉",
				description: data.title,
			});
		}
	};

	return (
		<BlogForm
			onHandleSubmit={onHandleSubmit}
			defaultBlog={defaultCreateBlog}
		/>
	);
}
