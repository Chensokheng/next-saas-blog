import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import SessisonProvider from "../components/SessisonProvider";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
