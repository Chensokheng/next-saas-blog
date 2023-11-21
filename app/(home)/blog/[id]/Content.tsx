import MarkdownPreview from "@/app/components/MarkdownPreview";
import { readBlogContent } from "@/lib/actions";
import React from "react";

export default async function Content({ blogId }: { blogId: string }) {
	const { data } = await readBlogContent(blogId);

	return <MarkdownPreview content={data?.content || ""} />;
}
