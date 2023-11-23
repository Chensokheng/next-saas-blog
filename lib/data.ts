import { IBlogDetial } from "./types";

export const blogDeafultValue = `
## Serendipity Chronicles: Tales from a Random Blog

As we wrap up our adventures, let's reflect on the serendipitous moments that defined this journey. The JavaScript snippet below captures a moment of serendipity in code:

\`\`\`js @app/lib/serendipityMoments.js
const serendipityMoments = [
  "Unexpectedly meeting a fellow adventurer",
  "Discovering a hidden gem in a random location",
  "Finding the perfect solution when least expected"
];

const randomSerendipity = serendipityMoments[Math.floor(Math.random() * serendipityMoments.length)];
console.log(\`Serendipity at its finest: \${randomSerendipity}\`);
\`\`\`

`;

export const blogs = [
	{
		id: `1`,
		title: "Random Blog Adventures",
		image_url:
			"https://images.unsplash.com/photo-1700164805522-c3f2f8885144?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		created_at: "2023-05-15",
		is_premium: true,
		is_published: true,
		content: blogDeafultValue,
	},
	{
		id: "2",
		title: "Exploring the Unknown: A Random Blog Journey",
		image_url:
			"https://images.unsplash.com/photo-1700130862148-8bea5f545bfe?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

		created_at: "2023-06-22",
		is_premium: false,
		is_published: false,

		content: blogDeafultValue,
	},
	{
		id: "3",
		title: "City Lights at Night",
		image_url:
			"https://images.unsplash.com/photo-1699968237129-b8d83b25ecd9?q=80&w=3557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

		created_at: "2023-08-10",
		is_premium: false,
		is_published: false,
		content: blogDeafultValue,
	},
	{
		id: "4",
		title: "Unleashing Creativity: The Surprising Benefits of Doodling",
		image_url:
			"https://images.unsplash.com/photo-1699100329878-7f28bb780787?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		created_at: "2023-10-05",
		is_premium: true,
		is_published: false,

		content: blogDeafultValue,
	},
	{
		id: "5",
		title: "Unleashing Creativity: The Surprising Benefits of Doodling",
		image_url:
			"https://images.unsplash.com/photo-1700316740839-f5afe22536e4?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		created_at: "2023-10-05",
		is_premium: false,
		is_published: false,
		content: blogDeafultValue,
	},
];

export const defaultCreateBlog: IBlogDetial = {
	id: "",
	title: "",
	image_url: "",
	created_at: "",
	is_premium: false,
	is_published: false,
	blog_content: {
		created_at: "",
		content: "",
		blog_id: "",
	},
};
export const users = [
	{
		display_name: "John Doe",
		image_url: "/profile.png",
		subscription_status: "Active",
		customer_id: "123456",
		email: "john.doe@example.com",
	},
	{
		display_name: "Alice Smith",
		image_url: "/profile.png",
		subscription_status: "Inactive",
		customer_id: "789012",
		email: "alice.smith@example.com",
	},
	{
		display_name: "Bob Johnson",
		image_url: "/profile.png",
		subscription_status: "Active",
		customer_id: "345678",
		email: "bob.johnson@example.com",
	},
	{
		display_name: "Eva Brown",
		image_url: "/profile.png",
		subscription_status: "Active",
		customer_id: "901234",
		email: "eva.brown@example.com",
	},
];
