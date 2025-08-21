import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
	({ className, ...props }, ref) => (
		<textarea
			ref={ref}
			className={cn(
				"flex min-h-[120px] w-full rounded-md border border-neutral-300 bg-white px-4 sm:px-3 py-3 sm:py-2 text-base sm:text-sm ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 touch-manipulation resize-none",
				className
			)}
			{...props}
		/>
	)
);
Textarea.displayName = "Textarea"; 