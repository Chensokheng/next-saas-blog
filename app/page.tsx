import Link from "next/link";
import React from "react";
import HoverUnderLine from "./components/HoverUnderLine";
import Image from "next/image";
import { blogs } from "@/lib/data";

export default function Home() {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
			{blogs.map((blog, index) => {
				return (
					// TODO: make a component
					<Link
						href={"/blog-detail"}
						className="w-full  border rounded-md dark:bg-graident-dark p-5 hover:ring-2 ring-green-500 transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3"
						key={index}
					>
						<div className="w-full h-72 sm:w-full sm:h-72  lg:h-96  relative">
							<Image
								src={blog.image_url}
								alt="cover"
								fill
								className=" rounded-md object-cover object-center"
							/>
						</div>
						<div className="space-y-2">
							<p className="text-sm dark:text-gray-400">
								{blog.date}
							</p>

							<h1 className="text-xl font-bold dark:text-gray-300">
								{blog.title}
							</h1>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
