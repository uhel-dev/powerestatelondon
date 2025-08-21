"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={cn("divide-y divide-neutral-200 border border-neutral-200 rounded-xl", className)}>{children}</div>;
}

export function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
	const [open, setOpen] = React.useState(false);
	return (
		<div>
			<button
				onClick={() => setOpen((o) => !o)}
				className="w-full text-left px-4 sm:px-4 py-4 sm:py-3 flex items-center justify-between touch-manipulation"
				aria-expanded={open}
			>
				<span className="font-medium text-base sm:text-sm">{title}</span>
				<span className="text-xl sm:text-xl">{open ? "−" : "+"}</span>
			</button>
			{open && <div className="px-4 pb-4 text-base sm:text-sm text-neutral-700">{children}</div>}
		</div>
	);
} 