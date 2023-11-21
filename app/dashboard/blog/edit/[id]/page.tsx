import React from "react";

import { toast } from "@/components/ui/use-toast";
import BlogForm from "../../components/BlogForm";
import { defaultCreateBlog } from "@/lib/data";
import EditForm from "./components/EditForm";
import { readBlogById } from "../../actions";
import { IBlogDetial } from "@/lib/types";

export default async function Edit({ params }: { params: { id: string } }) {
	const { data: blog } = await readBlogById(params.id);

	return <EditForm blog={blog as IBlogDetial} />;
}
