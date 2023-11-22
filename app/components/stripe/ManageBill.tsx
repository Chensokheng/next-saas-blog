"use client";
import { Button } from "@/components/ui/button";
import { manageBillingPortal } from "@/lib/actions/stripe";
import { cn } from "@/lib/utils";
import { BackpackIcon } from "@radix-ui/react-icons";
import React, { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ManageBill({ customerId }: { customerId: string }) {
	const [isPending, startTransition] = useTransition();
	const onSubmit = () => {
		startTransition(async () => {
			const data = JSON.parse(await manageBillingPortal(customerId));
			window.location.href = data.url;
		});
	};

	return (
		<form action={onSubmit}>
			<Button
				variant="ghost"
				className="w-full flex justify-between items-center"
			>
				<span className="flex items-center gap-2">
					<AiOutlineLoading3Quarters
						className={cn(" animate-spin", { hidden: !isPending })}
					/>
					Billing
				</span>
				<BackpackIcon />
			</Button>
		</form>
	);
}
