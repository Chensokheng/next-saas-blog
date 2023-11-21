import React from "react";

import EditForm from "./components/EditForm";
import { readBlogById } from "../../../../../lib/actions";
import { IBlogDetial } from "@/lib/types";

export default async function Edit({ params }: { params: { id: string } }) {
	const { data: blog } = await readBlogById(params.id);
	return <EditForm blog={blog as IBlogDetial} />;
}
