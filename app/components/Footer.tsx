import React from "react";
import {
	GitHubLogoIcon,
	DiscIcon,
	LinkedInLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons";
export default function Footer() {
	return (
		<footer className=" border-t py-10">
			<div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
				<div className="space-y-10">
					<div className="space-y-2 w-full sm:w-96">
						<h1 className="text-3xl font-bold">Daily Media</h1>
						<p className="">
							Explore a world of coding insights and knowledge on
							our blog website, where every article is a step
							towards mastering the art of programming and staying
							ahead in the dynamic tech landscape
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
	);
}
