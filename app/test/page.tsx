import React, { Suspense } from "react";
import Server from "./components/Server";

export async function generateMetadata({ params }: { params: { id: string } }) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const data = await fetch(
		"https://official-joke-api.appspot.com/random_joke"
	)
		.then((response) => response.json())
		.then((json) => json);

	return {
		title: data?.setup,
		authors: {
			name: "chensokheng",
		},
		keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
	};
}

export default async function page() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const data = await fetch(
		"https://official-joke-api.appspot.com/random_joke"
	)
		.then((response) => response.json())
		.then((json) => json);
	return (
		<>
			{JSON.stringify(data)}
			<Server />
		</>
	);
}
