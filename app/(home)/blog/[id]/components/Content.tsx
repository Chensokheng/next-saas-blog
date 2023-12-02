import MarkdownPreview from "@/components/markdown/MarkdownPreview";

import React from "react";

import Checkout from "@/components/stripe/Checkout";
import { createSupabaseServerClient } from "@/lib/supabase";
import { fetchCacheSupabase } from "@/lib/supabase/test";
import { cookies } from "next/headers";

export default async function Content({ blogId }: { blogId: string }) {
	const authToken = cookies().get(
		"sb-yymdoqdtmbfsrfydgfef-auth-token"
	)?.value;
	const blog = await fetchCacheSupabase(
		"/blog_content?select=*&blog_id=eq." + blogId,
		authToken!
	);

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
