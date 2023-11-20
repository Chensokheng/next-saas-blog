import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import {
	GitHubLogoIcon,
	DiscIcon,
	LinkedInLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://dailyblog-demo.vercel.app/"),

	title: {
		template: "%s | Daily Blog",
		default: "Daily Blog",
	},
	authors: {
		name: "chensokheng",
	},

	description:
		"Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
	openGraph: {
		title: "Daily Blog",
		description:
			"Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
		url: "https://dailyblog-demo.vercel.app/",
		siteName: "Daily Blog",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn("antialiased dark:bg-[#09090B]", inter.className)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
						<Navbar />
						{children}
					</main>
					<footer className=" border-t py-10">
						<div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
							<div className="space-y-10">
								<div className="space-y-2 w-96">
									<h1 className="text-3xl font-bold">
										Daily Media
									</h1>
									<p className="">
										Explore a world of coding insights and
										knowledge on our blog website, where
										every article is a step towards
										mastering the art of programming and
										staying ahead in the dynamic tech
										landscape
									</p>
								</div>
								<div className="flex items-center gap-2">
									<GitHubLogoIcon className="w-5 h-5" />
									<LinkedInLogoIcon className="w-5 h-5" />
									<DiscordLogoIcon className="w-5 h-5" />
								</div>
							</div>

							<h1 className="text-sm">
								&copy; 2023 Chensokheng.All right reserved
							</h1>
						</div>
					</footer>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
