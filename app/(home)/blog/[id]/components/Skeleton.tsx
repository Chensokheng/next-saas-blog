import React from "react";

export function BlogHeaderLoading() {
	return (
		<div className="animate-pulse space-y-5">
			<div className={`sm:px-10 space-y-5`}>
				<h1 className=" h-10 text-3xl font-bold bg-gray-200 w-1/2 rounded-md"></h1>
				<p className="text-sm bg-gray-400 h-2 rounded-md w-72"></p>
			</div>
			<div className="w-full h-96 relative bg-graident-dark"></div>
		</div>
	);
}

export function BlogContentLoading() {
	return (
		<div className="animate-pulse space-y-5 p-10">
			<h1 className=" h-10 text-3xl font-bold bg-graident-dark w-full rounded-md" />
			<h1 className=" h-5 text-3xl font-bold bg-graident-dark w-full rounded-md" />
			<h1 className=" h-5 text-3xl font-bold bg-graident-dark w-full rounded-md" />
			<h1 className=" h-10 text-3xl font-bold bg-graident-dark w-full rounded-md" />
			<h1 className=" h-5 text-3xl font-bold bg-graident-dark w-full rounded-md" />
		</div>
	);
}
