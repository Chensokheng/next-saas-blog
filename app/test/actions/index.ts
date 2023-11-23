"use server";

export async function getJoke() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return await fetch("https://official-joke-api.appspot.com/random_joke")
		.then((response) => response.json())
		.then((json) => json);
}
