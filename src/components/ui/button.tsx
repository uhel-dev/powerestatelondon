import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "default" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
};

const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:opacity-50 disabled:pointer-events-none touch-manipulation";
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
	default: "bg-neutral-900 text-white hover:bg-neutral-800",
	outline: "border border-neutral-300 hover:bg-neutral-50",
	ghost: "hover:bg-neutral-100",
};
const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
	sm: "h-10 sm:h-9 px-4 sm:px-3 text-sm",
	md: "h-12 sm:h-10 px-5 sm:px-4 text-sm",
	lg: "h-14 sm:h-11 px-8 sm:px-6 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "md", ...props }, ref) => {
		return (
			<button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
		);
	}
);
Button.displayName = "Button"; 