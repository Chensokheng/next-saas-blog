import { users } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<div className="rounded-md bg-graident-dark border-[0.5px] overflow-y-scroll ">
			<div className="w-[900px] md:w-full">
				<div className="grid grid-cols-4 border-b p-5 dark:text-gray-500">
					<h1>Name</h1>
					<h1>Subscription</h1>
					<h1>email</h1>
					<h1 className="text-right">{"customer's id"}</h1>
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
								<div className="flex items-center justify-end">
									<h1>{user.customer_id}</h1>
								</div>
							</div>
						);
					})}
				</div>
			</div>
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
