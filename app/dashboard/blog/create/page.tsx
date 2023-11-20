import React from "react";
import CreateForm from "./components/CreateForm";
import BlogNav from "../components/BlogNav";

export default function Page() {
	return (
		<div className="space-y-5">
			<BlogNav path="/ blog / create" />

			<CreateForm />
		</div>
	);
}
