import React, { ReactNode } from "react";

export default function HoverUnderLine({ children }: { children: ReactNode }) {
	return (
		<div className="group">
			{children}
			<div className="h-1 w-0 group-hover:w-full bg-green-500 transition-all"></div>
		</div>
	);
}
