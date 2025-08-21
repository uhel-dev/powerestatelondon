import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
	variant?: "default" | "secondary";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
				variant === "default" && "border-neutral-200 bg-neutral-100 text-neutral-900",
				variant === "secondary" && "border-neutral-200 bg-white text-neutral-600",
				className
			)}
			{...props}
		/>
	);
} 