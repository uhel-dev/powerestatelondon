import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	({ className, type = "text", ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(
					"flex h-12 sm:h-11 w-full rounded-md border border-neutral-300 bg-white px-4 sm:px-3 py-3 sm:py-2 text-base sm:text-sm ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 touch-manipulation",
					className
				)}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input"; 