import { readBlogById } from "@/lib/actions";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
