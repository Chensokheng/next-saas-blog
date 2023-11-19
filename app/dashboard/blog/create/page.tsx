"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { blogDeafultValue } from "@/lib/data";
import MarkdownPreview from "@/app/blog-detail/components/MarkdownPreview";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EyeOpenIcon, Pencil1Icon, RocketIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const FormSchema = z.object({
	title: z.string().min(10, {
		message: "title is too short",
	}),
	content: z.string().min(50, {
		message: "Content is too short",
	}),
	image_url: z.string().url({
		message: "Invalid url",
	}),
});

export default function FormCreate() {
	const [isPreview, setPreivew] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		mode: "all",
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "Unleashing Creativity: The Surprising Benefits of Doodling",
			content: blogDeafultValue,
			image_url:
				"https://images.unsplash.com/photo-1700164805522-c3f2f8885144?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full border pb-5 rounded-md"
			>
				<div className="border-b p-5 flex justify-between">
					<span
						onClick={() => {
							setPreivew(
								!isPreview &&
									!form.getFieldState("image_url").invalid
							);
						}}
						role="button"
						tabIndex={0}
						className="flex gap-2 items-center border px-3 py-1 rounded-md hover:border-zinc-400 transition-all bg-zinc-800 text-sm"
					>
						{!isPreview ? (
							<>
								<EyeOpenIcon />
								Preivew
							</>
						) : (
							<>
								<Pencil1Icon />
								Edit
							</>
						)}
					</span>
					<button
						type="submit"
						role="button"
						className={cn(
							"flex gap-2 items-center border px-3 py-1 rounded-md border-green-500 disabled:border-gray-800  bg-zinc-800 transition-all group text-sm disabled:bg-gray-900"
						)}
						disabled={!form.formState.isValid}
					>
						<RocketIcon className=" animate-bounce group-disabled:animate-none" />
						post
					</button>
				</div>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<>
									<div
										className={cn(
											"w-full flex break-words p-2 gap-2",
											isPreview
												? "divide-x-0"
												: "divide-x"
										)}
									>
										<Input
											placeholder="Blog title"
											{...field}
											autoFocus
											className={cn(
												"border-none text-lg font-medium leading-relaxed focus:ring-1 ring-green-500",
												isPreview
													? "w-0 p-0"
													: "w-full lg:w-1/2"
											)}
										/>
										<div
											className={cn(
												"lg:px-10",
												isPreview
													? "mx-auto w-full lg:w-4/5 "
													: " w-1/2 lg:block hidden "
											)}
										>
											<h1 className="text-3xl font-bold dark:text-gray-200">
												{form.getValues().title ||
													"Untittle blog"}
											</h1>
										</div>
									</div>
								</>
							</FormControl>

							{form.getFieldState("title").invalid &&
								form.getValues().title && (
									<div className="px-2">
										<FormMessage />
									</div>
								)}
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => {
						return (
							<FormItem>
								<FormControl>
									<div
										className={cn(
											"w-full flex divide-x p-2 gap-2 items-center",
											isPreview
												? "divide-x-0"
												: "divide-x"
										)}
									>
										<Input
											placeholder="🔗 Image url"
											{...field}
											className={cn(
												"border-none text-lg font-medium leading-relaxed focus:ring-1 ring-green-500 ",
												isPreview
													? "w-0 p-0"
													: "w-full lg:w-1/2"
											)}
											type="url"
										/>
										<div
											className={cn(
												" relative",
												isPreview
													? "px-0 mx-auto w-full lg:w-4/5 "
													: "px-10 w-1/2 lg:block hidden"
											)}
										>
											{isPreview ? (
												<div className="w-full h-80 relative mt-10">
													<Image
														src={
															form.getValues()
																.image_url
														}
														alt="preview"
														fill
														className=" object-cover object-center rounded-md"
													/>
												</div>
											) : (
												<p className="text-gray-400">
													👆 click on preview to see
													image
												</p>
											)}
										</div>
									</div>
								</FormControl>

								<div className="px-3">
									<FormMessage />
								</div>
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div
									className={cn(
										"w-full flex p-2 gap-2 h-70vh",
										!isPreview ? "divide-x" : "divide-x-0"
									)}
								>
									<Textarea
										placeholder="Blog content"
										{...field}
										className={cn(
											"border-none text-lg font-medium leading-relaxed focus:ring-1 ring-green-500  h-70vh resize-none",
											isPreview
												? "w-0 p-0"
												: "w-full lg:w-1/2"
										)}
									/>
									<div
										className={cn(
											"overflow-scroll h-full",
											isPreview
												? "mx-auto w-full lg:w-4/5 "
												: "w-1/2 lg:block hidden"
										)}
									>
										<MarkdownPreview
											content={form.getValues().content}
											className="lg:px-10"
										/>
									</div>
								</div>
							</FormControl>

							{form.getFieldState("content").invalid &&
								form.getValues().content && <FormMessage />}
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}

const ImgaeEror = ({ src }: { src: string }) => {
	try {
		return <Image src={src} alt="" width={100} height={100} />;
	} catch {
		return <h1>Invalid</h1>;
	}
};
