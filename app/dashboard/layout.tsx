import type { Metadata } from "next";

import React, { ReactNode } from "react";
import NavLinks from "./components/NavLinks";

export const metadata: Metadata = {
	metadataBase: new URL("https://dailyblog-demo.vercel.app/"),

	title: {
		template: "%s | Dashboard",
		default: "Dashboard",
	},
	authors: {
		name: "chensokheng",
	},

	description:
		"Empower your decision-making with our intuitive dashboard. Gain valuable insights at a glance with interactive visualizations and real-time analytics. Our dashboard provides a centralized hub for monitoring key metrics, tracking progress, and making data-driven decisions. Streamline your workflow, enhance collaboration, and stay ahead of the curve with customizable widgets and personalized dashboards. Experience the power of data in a user-friendly interface designed to optimize productivity and drive results.",
	openGraph: {
		title: "Dashboard",
		description:
			"Empower your decision-making with our intuitive dashboard. Gain valuable insights at a glance with interactive visualizations and real-time analytics. Our dashboard provides a centralized hub for monitoring key metrics, tracking progress, and making data-driven decisions. Streamline your workflow, enhance collaboration, and stay ahead of the curve with customizable widgets and personalized dashboards. Experience the power of data in a user-friendly interface designed to optimize productivity and drive results.",
		url: "https://dailyblog-demo.vercel.app/",
		siteName: "Daily Blog",
		images: "/og-dashboard.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<NavLinks />
			{children}
		</>
	);
}
