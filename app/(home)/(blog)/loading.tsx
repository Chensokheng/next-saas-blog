import React from "react";
import BlogListLoading from "./components/BlogListLoading";

export default function loading() {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
			<BlogListLoading />
		</div>
	);
}
