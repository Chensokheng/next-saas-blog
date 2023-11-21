import { Switch } from "@/components/ui/switch";
import React from "react";
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import readBlog, { updateBlogById } from "../actions";

export default async function BlogTable() {
	const { data: blogs } = await readBlog();

	return (
		<>
			<div className="rounded-md bg-graident-dark border-[0.5px] overflow-y-scroll ">
				<div className="w-[800px] md:w-full">
					<div className="grid grid-cols-5 border-b p-5 dark:text-gray-500">
						<h1 className=" col-span-2">Title</h1>
						<h1>Premium</h1>
						<h1>Publish</h1>
					</div>
					<div className="space-y-10 p-5">
						{blogs?.map((blog, index) => {
							return (
								<div className="grid grid-cols-5" key={index}>
									<h1 className="dark:text-gray-200 col-span-2 font-lg font-medium">
										{blog.title}
									</h1>
									<Switch
										type="submit"
										checked={blog.is_premium}
										className="bg-green-500"
									/>

									<Switch
										type="submit"
										checked={blog.is_published}
										className="bg-green-500"
									/>

									<Actions id={blog.id} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

const Actions = ({ id }: { id: string }) => {
	return (
		<div className="flex items-center gap-2 md:flex-wrap">
			{/* TODO: change to id */}
			<Link href="/blog-detail">
				<Button className="flex gap-2 items-center" variant="outline">
					<EyeOpenIcon />
					View
				</Button>
			</Link>

			<Button className="flex gap-2 items-center" variant="outline">
				<TrashIcon />
				Delete
			</Button>

			<Link href={`/dashboard/blog/edit/${id}`}>
				<Button className="flex gap-2 items-center" variant="outline">
					<Pencil1Icon />
					Edit
				</Button>
			</Link>
		</div>
	);
};
