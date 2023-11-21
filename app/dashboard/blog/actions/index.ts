"use server";

import { createSupabaseServerClient } from "@/lib/supabase";
import { revalidatePath, revalidateTag } from "next/cache";

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

		revalidatePath("/dashboard/blog");
		return JSON.stringify(result);
	}
}

export default async function readBlog() {
	const supabase = await createSupabaseServerClient();
	return supabase.from("blog").select("*");
}

export async function updateBlogById(
	blogId: string,
	data: { is_premium: boolean; is_published: boolean }
) {
	const supabase = await createSupabaseServerClient();
	await supabase
		.from("blog")
		.update({
			is_premium: !data.is_premium,
			is_published: !data.is_published,
		})
		.eq("id", blogId);
	revalidateTag("blogDashboard");
}
