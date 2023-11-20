import { blogs } from "@/lib/data";
import { redirect } from "next/navigation";
import React from "react";
import EditForm from "./components/EditForm";
import { DashboardIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import HoverUnderLine from "@/app/(home)/components/HoverUnderLine";
import BlogNav from "../../components/BlogNav";

export default function Page({ params }: { params: { id: string } }) {
	const blog = blogs.filter((blog) => blog.id === params.id);

	if (!blog.length) {
		return redirect("/404");
	}
	const foundBlog = blog[0];

	return (
		<div className="space-y-5">
			<BlogNav path={`/ blog / edit /${params.id}`} />
			<EditForm blog={foundBlog} />
		</div>
	);
}
