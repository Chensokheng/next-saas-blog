import * as z from "zod";

export const BlogFormSchema = z.object({
	title: z.string().min(10, {
		message: "title is too short",
	}),
	content: z.string().min(50, {
		message: "Content is too short",
	}),
	image_url: z.string().url({
		message: "Invalid url",
	}),
	is_premium: z.boolean(),
	is_published: z.boolean(),
});

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;
