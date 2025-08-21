"use client";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const stepsSchema = z.object({
	postcode: z.string().min(3, "Please enter a valid postcode"),
	service: z.enum([
		"New boiler",
		"Boiler repair",
		"General plumbing",
		"Heating install",
		"Bathroom install",
	]),
	propertyType: z.enum(["Flat", "Terraced", "Semi-detached", "Detached", "Other"]),
	bathrooms: z.enum(["1", "2", "3+"]),
	urgency: z.enum(["Emergency today", "Within 48 hours", "1–2 weeks", "Just researching"]),
	name: z.string().min(2, "Enter your name"),
	phone: z.string().min(7, "Enter a valid phone"),
	email: z.string().email().optional().or(z.literal("")),
	consent: z.boolean().refine((v) => v === true, { message: "Consent required" }),
});

type StepsData = z.infer<typeof stepsSchema>;

const initialData: StepsData = {
	postcode: "",
	service: "New boiler",
	propertyType: "Flat",
	bathrooms: "1",
	urgency: "Within 48 hours",
	name: "",
	phone: "",
	email: "",
	consent: true,
};

const options = {
	service: ["New boiler", "Boiler repair", "General plumbing", "Heating install", "Bathroom install"] as StepsData["service"][],
	propertyType: ["Flat", "Terraced", "Semi-detached", "Detached", "Other"] as StepsData["propertyType"][],
	bathrooms: ["1", "2", "3+"] as StepsData["bathrooms"][],
	urgency: ["Emergency today", "Within 48 hours", "1–2 weeks", "Just researching"] as StepsData["urgency"][],
};

export default function InteractiveLead() {
	const [step, setStep] = useState(0);
	const [data, setData] = useState<StepsData>(initialData);
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	const [error, setError] = useState<string | null>(null);
	const [notes, setNotes] = useState<string>("");

	const progress = useMemo(() => Math.round(((step + 1) / 6) * 100), [step]);

	function update<K extends keyof StepsData>(key: K, value: StepsData[K]) {
		setData((d) => ({ ...d, [key]: value }));
	}

	function next() {
		setStep((s) => Math.min(s + 1, 5));
	}

	function prev() {
		setStep((s) => Math.max(s - 1, 0));
	}

	async function submit() {
		setError(null);
		const parsed = stepsSchema.safeParse(data);
		if (!parsed.success) {
			setError(parsed.error.issues[0]?.message || "Please check your answers");
			return;
		}
		setStatus("submitting");
		try {
			const message = buildMessage(parsed.data, notes);
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: parsed.data.name,
					email: parsed.data.email || "",
					phone: parsed.data.phone,
					message,
					consent: true,
				}),
			});
			if (!res.ok) throw new Error("Request failed");
			setStatus("success");
		} catch (e) {
			setStatus("error");
			setError("Something went wrong. Please try again or call us.");
		}
	}

	return (
		<section id="quote" aria-labelledby="quote-title" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
			<div className="mb-6">
				{/* Progress Bar */}
				<div className="mb-4">
					<div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
						<div 
							className="h-full rounded-full bg-neutral-900 transition-all duration-300 ease-in-out" 
							style={{ width: `${progress}%` }} 
						/>
					</div>
					<p className="mt-3 text-sm text-neutral-500">
						Step {step + 1} of 6
					</p>
				</div>
				
				{/* Title */}
				<h3 id="quote-title" className="text-xl font-semibold text-neutral-900 mb-2">
					Answer a few quick questions
				</h3>
				<p className="text-sm text-neutral-600">
					No obligation, just expert advice
				</p>
			</div>

			{/* Step Content */}
			<div className="min-h-[200px]">
				{step === 0 && (
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-2">
								Your postcode
							</label>
							<Input 
								value={data.postcode} 
								onChange={(e) => update("postcode", e.target.value)} 
								placeholder="e.g. TW13" 
								className="h-11"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-3">
								Service needed
							</label>
							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
								{options.service.map((opt) => (
									<button
										key={opt}
										onClick={(e) => {
											e.preventDefault();
											update("service", opt);
										}}
										className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
											data.service === opt 
												? "border-neutral-900 bg-neutral-900 text-white shadow-sm" 
												: "border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400"
										}`}
									>
										{opt}
									</button>
								))}
							</div>
						</div>
					</div>
				)}

				{step === 1 && (
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-3">
								Property type
							</label>
							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
								{options.propertyType.map((opt) => (
									<button
										key={opt}
										onClick={(e) => {
											e.preventDefault();
											update("propertyType", opt);
										}}
										className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
											data.propertyType === opt 
												? "border-neutral-900 bg-neutral-900 text-white shadow-sm" 
												: "border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400"
										}`}
									>
										{opt}
									</button>
								))}
							</div>
						</div>
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-3">
								Bathrooms
							</label>
							<div className="flex gap-3">
								{options.bathrooms.map((opt) => (
									<button
										key={opt}
										onClick={(e) => {
											e.preventDefault();
											update("bathrooms", opt);
										}}
										className={`rounded-lg border px-6 py-3 text-sm font-medium transition-all duration-200 ${
											data.bathrooms === opt 
												? "border-neutral-900 bg-neutral-900 text-white shadow-sm" 
												: "border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400"
										}`}
									>
										{opt}
									</button>
								))}
							</div>
						</div>
					</div>
				)}

				{step === 2 && (
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-3">
								How urgent is it?
							</label>
							<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
								{options.urgency.map((opt) => (
									<button
										key={opt}
										onClick={(e) => {
											e.preventDefault();
											update("urgency", opt);
										}}
										className={`rounded-lg border px-3 py-3 text-sm font-medium transition-all duration-200 ${
											data.urgency === opt 
												? "border-neutral-900 bg-neutral-900 text-white shadow-sm" 
												: "border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400"
										}`}
									>
										{opt}
									</button>
								))}
							</div>
						</div>
					</div>
				)}

				{step === 3 && (
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-3">
								Anything else we should know?
							</label>
							<Textarea
								placeholder="e.g. boiler brand/age, leak location, preferred time"
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
								className="min-h-[120px] resize-none"
							/>
						</div>
					</div>
				)}

				{step === 4 && (
					<div className="space-y-6">
						<div className="grid gap-4 sm:grid-cols-3">
							<div className="sm:col-span-3">
								<label className="block text-sm font-medium text-neutral-700 mb-2">
									Your name
								</label>
								<Input 
									value={data.name} 
									onChange={(e) => update("name", e.target.value)} 
									placeholder="Full name" 
									className="h-11"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-neutral-700 mb-2">
									Phone
								</label>
								<Input 
									value={data.phone} 
									onChange={(e) => update("phone", e.target.value)} 
									placeholder="Mobile number" 
									className="h-11"
								/>
							</div>
							<div className="sm:col-span-2">
								<label className="block text-sm font-medium text-neutral-700 mb-2">
									Email (optional)
								</label>
								<Input 
									type="email" 
									value={data.email} 
									onChange={(e) => update("email", e.target.value)} 
									placeholder="you@example.com" 
									className="h-11"
								/>
							</div>
						</div>
						<div className="pt-2">
							<label className="flex items-start gap-3 text-sm">
								<input
									type="checkbox"
									checked={data.consent}
									onChange={(e) => update("consent", Boolean(e.target.checked))}
									className="mt-0.5"
								/>
								<span className="text-neutral-700">
									I agree to be contacted about this enquiry.
								</span>
							</label>
						</div>
					</div>
				)}

				{step === 5 && (
					<div className="space-y-6">
						<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<h4 className="font-medium text-neutral-900 mb-3">Summary</h4>
							<div className="grid gap-2 text-sm text-neutral-700">
								<div className="flex justify-between">
									<span>Postcode:</span>
									<span className="font-medium">{data.postcode}</span>
								</div>
								<div className="flex justify-between">
									<span>Service:</span>
									<span className="font-medium">{data.service}</span>
								</div>
								<div className="flex justify-between">
									<span>Property:</span>
									<span className="font-medium">{data.propertyType}</span>
								</div>
								<div className="flex justify-between">
									<span>Bathrooms:</span>
									<span className="font-medium">{data.bathrooms}</span>
								</div>
								<div className="flex justify-between">
									<span>Urgency:</span>
									<span className="font-medium">{data.urgency}</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Error Message */}
			{error && (
				<div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3">
					<p className="text-sm text-red-600">{error}</p>
				</div>
			)}

			{/* Navigation */}
			<div className="mt-8 flex items-center justify-between pt-4 border-t border-neutral-100">
				<Button 
					variant="ghost" 
					size="sm" 
					onClick={prev} 
					disabled={step === 0 || status === "submitting"}
					className="text-neutral-600 hover:text-neutral-900"
				>
					Back
				</Button>
				<div className="flex gap-3">
					{step < 5 && (
						<Button 
							onClick={next} 
							disabled={status === "submitting"}
							className="px-6"
						>
							Next
						</Button>
					)}
					{step === 5 && (
						<Button 
							onClick={submit} 
							disabled={status === "submitting"}
							className="px-6"
						>
							{status === "submitting" ? "Sending..." : "Send request"}
						</Button>
					)}
				</div>
			</div>

			{/* Status Messages */}
			{status === "success" && (
				<div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3">
					<p className="text-sm text-green-700">Thanks — we'll be in touch shortly.</p>
				</div>
			)}
			{status === "error" && (
				<div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3">
					<p className="text-sm text-red-600">There was a problem sending your request.</p>
				</div>
			)}
		</section>
	);
}

function buildMessage(data: StepsData, notes: string) {
	const extra = notes?.trim() ? `\nNotes: ${notes.trim()}` : "";
	return `Quick quote request\n\nPostcode: ${data.postcode}\nService: ${data.service}\nProperty: ${data.propertyType}\nBathrooms: ${data.bathrooms}\nUrgency: ${data.urgency}${extra}`;
} 