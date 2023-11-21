"use server";

import { createSupabaseServerClient } from "@/lib/supabase";
import { IBlog } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { BlogFormSchemaType } from "../schema";

const PATH = "/dashboard/blog";

export async function createBlog(data: {
	content: string;
	title: string;
	image_url: string;
	is_premium: boolean;
	is_published: boolean;
}) {
	const { ["content"]: excludedKey, ...blog } = data;

	const supabase = await createSupabaseServerClient();
	const blogResult = await supabase
		.from("blog")
		.insert(blog)
		.select("id")
		.single();

	if (blogResult.error?.message && !blogResult.data) {
		return JSON.stringify(blogResult);
	} else {
		const result = await supabase
			.from("blog_content")
			.insert({ blog_id: blogResult?.data?.id!, content: data.content });

		revalidatePath(PATH);
		return JSON.stringify(result);
	}
}

export async function readBlog() {
	const supabase = await createSupabaseServerClient();
	return supabase
		.from("blog")
		.select("*")
		.order("created_at", { ascending: true });
}

export async function readBlogHomePage() {
	const supabase = await createSupabaseServerClient();
	return supabase
		.from("blog")
		.select("*,blog_content(*)")
		.order("created_at", { ascending: true });
}

export async function readBlogById(blogId: string) {
	const supabase = await createSupabaseServerClient();
	return await supabase
		.from("blog")
		.select("*,blog_content(*)")
		.eq("id", blogId)
		.single();
}

export async function updateBlogById(blogId: string, data: IBlog) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.from("blog").update(data).eq("id", blogId);
	revalidatePath(PATH);
	return JSON.stringify(result);
}

export async function updateBlogDetail(
	blogId: string,
	data: BlogFormSchemaType
) {
	const { ["content"]: excludedKey, ...blog } = data;

	const supabase = await createSupabaseServerClient();
	const resultBlog = await supabase
		.from("blog")
		.update(blog)
		.eq("id", blogId);
	if (resultBlog.error) {
		return JSON.stringify(resultBlog);
	} else {
		const result = await supabase
			.from("blog_content")
			.update({ content: data.content })
			.eq("blog_id", blogId);
		revalidatePath(PATH);
		return JSON.stringify(result);
	}
}

export async function deleteBlogById(blogId: string) {
	const supabase = await createSupabaseServerClient();
	const result = await supabase.from("blog").delete().eq("id", blogId);
	revalidatePath(PATH);
	return JSON.stringify(result);
}
