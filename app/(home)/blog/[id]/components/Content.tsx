import MarkdownPreview from "@/components/markdown/MarkdownPreview";

import React from "react";

import Checkout from "@/components/stripe/Checkout";
import { createSupabaseServerClient } from "@/lib/supabase";

export default async function Content({ blogId }: { blogId: string }) {
	const supabase = await createSupabaseServerClient();
	const { data: blog } = await supabase
		.from("blog_content")
		.select("*")
		.eq("blog_id", blogId)
		.single();
	if (!blog?.content) {
		return <Checkout />;
	}
	return <MarkdownPreview content={blog?.content || ""} />;
}
// const [loading, setLoading] = useState(true);

// const [blog, setBlog] = useState<{
// 	blog_id: string;
// 	content: string;
// 	created_at: string;
// } | null>();

// const supabase = createBrowserClient<Database>(
// 	process.env.NEXT_PUBLIC_SUPABASE_URL!,
// 	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// const readBlogContent = async () => {

// 	setBlog(data);
// 	setLoading(false);
// };

// useEffect(() => {
// 	readBlogContent();

// 	// eslint-disable-next-line
// }, []);

// if (loading) {
// 	return <BlogContentLoading />;
// }

// if (!blog?.content) {
// 	return <Checkout />;
// }

// }
