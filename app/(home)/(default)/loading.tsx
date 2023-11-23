import React from "react";

export default function loading() {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
			{[1, 2, 3, 4, 5]?.map((_, index) => {
				return (
					<div
						className="w-full  border rounded-md dark:bg-graident-dark p-5 hover:ring-2 ring-green-500 transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3"
						key={index}
					>
						<div className="w-full h-72 sm:w-full  md:h-64 xl:h-96  relative"></div>
						<div className="space-y-2">
							<p className="text-sm dark:text-gray-400 h-5 bg-gray-500"></p>
							<p className="text-sm dark:text-gray-400 h-10 bg-gray-500"></p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
