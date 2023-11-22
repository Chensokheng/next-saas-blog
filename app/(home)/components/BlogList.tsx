import { readBlog } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function BlogList() {
	const { data: blogs } = await readBlog();

	return (
		<>
			{blogs?.map((blog, index) => {
				return (
					<Link
						href={"/blog/" + blog.id}
						className="w-full  border rounded-md dark:bg-graident-dark p-5 hover:ring-2 ring-green-500 transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3"
						key={index}
					>
						<div className="w-full h-72 sm:w-full  md:h-64 xl:h-96  relative">
							<Image
								src={blog.image_url}
								alt="cover"
								fill
								className=" rounded-md object-cover object-center"
							/>
						</div>
						<div className="space-y-2">
							<p className="text-sm dark:text-gray-400">
								{new Date(blog.created_at).toDateString()}
							</p>

							<h1 className="text-xl font-bold dark:text-gray-300">
								{blog.title}
							</h1>
						</div>
					</Link>
				);
			})}
		</>
	);
}
