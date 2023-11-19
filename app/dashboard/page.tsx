import { Switch } from "@/components/ui/switch";
import { blogs, users } from "@/lib/data";
import React from "react";
import {
	DashboardIcon,
	PlusIcon,
	EyeOpenIcon,
	Pencil1Icon,
	TrashIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
export default function Dashboard() {
	return (
		<div className="w-full min-h-screen space-y-10">
			{/* blog table */}

			<div className="flex items-center justify-between">
				<h1 className="text-xl text-gray-400 flex  items-center gap-2">
					<DashboardIcon />
					/Dashboard
				</h1>
				<Button className="flex items-center gap-2 " variant="outline">
					Create <PlusIcon />{" "}
				</Button>
			</div>
			<div className="rounded-md bg-graident-dark border-[0.5px] ">
				<div className="grid grid-cols-4 border-b p-5 dark:text-gray-500">
					<h1 className=" col-span-2">Title</h1>
					<h1>Premium</h1>
				</div>
				<div className="space-y-10 p-5">
					{blogs.map((blog, index) => {
						return (
							<div className="grid grid-cols-4" key={index}>
								<h1 className="dark:text-gray-200 col-span-2 font-lg font-medium">
									{blog.title}
								</h1>
								<Switch
									className="bg-green-500"
									checked={blog.is_premium}
								/>
								<Actions />
							</div>
						);
					})}
				</div>
			</div>
			{/* end of blog table */}
			{/* user */}
			<div>
				<h1 className="text-xl text-gray-400 flex  items-center gap-2">
					<PersonIcon />
					/User
				</h1>
			</div>
			<div className="rounded-md bg-graident-dark border-[0.5px] ">
				<div className="grid grid-cols-4 border-b p-5 dark:text-gray-500">
					<h1>Name</h1>
					<h1>Subscription</h1>
					<h1>email</h1>
					<h1>{"customer's id"}</h1>
				</div>
				<div className="space-y-10 p-5">
					{users.map((user, index) => {
						return (
							<div
								className="grid grid-cols-4 grid-flow-dense"
								key={index}
							>
								<div className="flex items-center gap-2 font-medium">
									<Image
										src={user.image_url}
										className="rounded-full ring-green-500 ring-1"
										width={50}
										height={50}
										alt={user.display_name}
									/>
									<h1>{user.display_name}</h1>
								</div>

								<SubscriptionStatus
									status={user.subscription_status}
								/>
								<div className="flex items-center">
									<h1>{user.email}</h1>
								</div>
								<div className="flex items-center">
									<h1>{user.customer_id}</h1>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/* end user */}
		</div>
	);
}

const SubscriptionStatus = ({ status }: { status: string }) => {
	return (
		<div className="flex items-center">
			<span
				className={cn(
					" dark:bg-zinc-800 px-2 py-1 rounded-full shadow capitalize  border-[.5px] text-sm",
					{
						"border-green-500 text-green-600 bg-green-200":
							status === "Active",
						"border-zinc-300 dark:text-red-400 dark:border-yellow-700 px-4 bg-red-50":
							status === "Inactive",
					}
				)}
			>
				{status}
			</span>
		</div>
	);
};

const Actions = () => {
	return (
		<div className="flex items-center gap-2">
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
			<Button className="flex gap-2 items-center" variant="outline">
				<Pencil1Icon />
				Edit
			</Button>
		</div>
	);
};
