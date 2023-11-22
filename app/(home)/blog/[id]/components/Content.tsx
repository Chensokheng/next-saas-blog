import MarkdownPreview from "@/app/components/markdown/MarkdownPreview";
import LoginForm from "@/app/components/nav/LoginForm";
import Checkout from "@/app/components/stripe/Checkout";
import { readBlogContent } from "@/lib/actions";
import { useUser } from "@/lib/store/user";
import React from "react";

export default async function Content({ blogId }: { blogId: string }) {
	const { data } = await readBlogContent(blogId);

	if (!data) {
		return <Checkout />;
	}

	return <MarkdownPreview content={data?.content || ""} />;
}
