"use client";
import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({ name: z.string().min(2), phone: z.string().min(7), message: z.string().min(5) });

export default function LeadForm() {
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	
	async function onSubmit(formData: FormData) {
		const parsed = schema.safeParse(Object.fromEntries(formData));
		if (!parsed.success) return;
		setStatus("submitting");
		try {
			await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...parsed.data, email: "", consent: true }),
			});
			setStatus("success");
		} catch {
			setStatus("error");
		}
	}
	
	return (
		<form action={onSubmit} className="space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label className="block text-sm font-medium text-neutral-700 mb-2">
						Your name
					</label>
					<Input 
						name="name" 
						placeholder="Your name" 
						required 
						className="h-11"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-neutral-700 mb-2">
						Phone
					</label>
					<Input 
						name="phone" 
						placeholder="Phone" 
						required 
						className="h-11"
					/>
				</div>
			</div>
			
			<div>
				<label className="block text-sm font-medium text-neutral-700 mb-2">
					Briefly describe the issue
				</label>
				<Textarea 
					name="message" 
					placeholder="Briefly describe the issue" 
					required 
					className="min-h-[100px] resize-none"
				/>
			</div>
			
			<button 
				disabled={status === "submitting"} 
				className="w-full inline-flex h-12 items-center justify-center rounded-lg bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{status === "submitting" ? "Sending..." : "Request Callback"}
			</button>
			
			{/* Status Messages */}
			{status === "success" && (
				<div className="rounded-lg bg-green-50 border border-green-200 p-3">
					<p className="text-sm text-green-700">Thanks — we'll call you shortly.</p>
				</div>
			)}
			{status === "error" && (
				<div className="rounded-lg bg-red-50 border border-red-200 p-3">
					<p className="text-sm text-red-600">Please try again.</p>
				</div>
			)}
		</form>
	);
} 