"use client";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { ChangeEvent } from "react";

export default function SwitchForm({
	checked,
	onSubmit,
	name,
}: {
	checked: boolean;
	onSubmit: () => Promise<string>;
	name: string;
}) {
	const handleonSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = JSON.parse(await onSubmit());
		if (!error) {
			toast({
				title: `Successfully update ${name} 🎉`,
			});
		}
	};
	return (
		<form onSubmit={handleonSubmit}>
			<Switch type="submit" checked={checked} className="bg-green-500" />
		</form>
	);
}
