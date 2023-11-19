import { icons } from "@/lib/icon";
import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import CopyButton from "./CopyButton";
import { blogMarkdown } from "../data";
import "highlight.js/styles/atom-one-dark.min.css";

export default function MarkdownPreview() {
	return (
		<Markdown
			className="dark:text-gray-200 space-y-8 sm:p-10"
			rehypePlugins={[rehypeHighlight]}
			components={{
				h1: ({ node, ...props }) => {
					return <h1 {...props} className="text-3xl font-bold" />;
				},
				h2: ({ node, ...props }) => {
					return (
						<h1
							{...props}
							className="text-2xl font-bold mt-10 mb-10"
						/>
					);
				},
				h3: ({ node, ...props }) => {
					return (
						<h1
							{...props}
							className="text-xl font-bold mt-10 mb-10"
						/>
					);
				},
				code: ({ node, className, children, ...props }) => {
					const match = /language-(\w+)/.exec(className || "");
					const Icon = icons[match![1] as keyof typeof icons];
					return (
						<div className=" bg-graident-dark text-gray-300 border-[0.5px] rounded-md border-zinc-500">
							<div className="flex items-center justify-between px-5 py-2 border-b-[0.5px] border-zinc-500">
								<div className="flex items-center gap-2">
									<Icon />
									<p className="text-sm text-gray-400">
										{/* @ts-ignore  */}
										{node?.data?.meta}
									</p>
								</div>
								<CopyButton />
							</div>
							<div className="overflow-y-scroll w-full">
								<div className="p-5" id="hello">
									{children}
								</div>
							</div>
						</div>
					);
				},
			}}
		>
			{blogMarkdown}
		</Markdown>
	);
}
