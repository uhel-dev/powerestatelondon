"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { site } from "../../site.config";

const ratings = [
	{ label: "Courtesy", score: 9.97, blurb: "Customers rate our professionalism and clear communication." },
	{ label: "Reliability", score: 9.84, blurb: "On-time arrivals and work completed as promised." },
	{ label: "Workmanship", score: 9.94, blurb: "Quality installs and thorough repairs you can rely on." },
	{ label: "Tidiness", score: 9.94, blurb: "We protect your home and leave it spotless." },
];

const formSchema = z.object({
	name: z.string().min(2),
	phone: z.string().min(7),
	urgency: z.enum(["urgent", "norush"]),
	company: z.string().optional(), // honeypot
});

function useUTM() {
	if (typeof window === "undefined") return {};
	const params = new URLSearchParams(window.location.search);
	const keys = [
		"utm_source",
		"utm_medium",
		"utm_campaign",
		"utm_term",
		"utm_content",
		"gclid",
		"gbraid",
		"wbraid",
	];
	const out: Record<string, string> = {};
	for (const k of keys) {
		const v = params.get(k);
		if (v) out[k] = v;
	}
	return out;
}

function trackAdsConversion() {
	try {
		// Optional Google Ads conversion firing if configured globally
		const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
		const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const gtag = (globalThis as any).gtag as undefined | ((...args: unknown[]) => void);
		if (gtag && id && label) {
			gtag("event", "conversion", { send_to: `${id}/${label}` });
		}
	} catch {}
}

export default function CheckatradeWidget() {
	const [index, setIndex] = useState(0);
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	const [error, setError] = useState<string | null>(null);
	const utm = useUTM();
	const timer = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		// auto-rotate every 4s
		timer.current = setInterval(() => setIndex((i) => (i + 1) % ratings.length), 4000);
		return () => {
			if (timer.current) clearInterval(timer.current);
		};
	}, []);

	async function onSubmit(formData: FormData) {
		setError(null);
		const parsed = formSchema.safeParse(Object.fromEntries(formData));
		if (!parsed.success) return;
		// spam honeypot
		if (parsed.data.company && parsed.data.company.length > 0) return;

		setStatus("submitting");
		try {
			const messageLines = [
				"Quick callback requested via Ratings Widget.",
				`Interest: ${ratings[index].label}`,
				`Urgency: ${parsed.data.urgency === "urgent" ? "Urgent — help me quickly please" : "No rush"}`,
				utm && Object.keys(utm).length > 0 ? `Attribution: ${JSON.stringify(utm)}` : "",
			].filter(Boolean);

			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: parsed.data.name,
					email: "",
					phone: parsed.data.phone,
					message: messageLines.join("\n"),
					consent: true,
				}),
			});
			if (!res.ok) throw new Error("Request failed");
			trackAdsConversion();
			setStatus("success");
		} catch (e) {
			setStatus("error");
			setError("Something went wrong. Please try again or call us.");
		}
	}

	return (
		<div className="w-full lg:min-w-[450px] max-w-xl rounded-2xl border border-white/30 bg-white/95 p-4 shadow-xl backdrop-blur-md">
			<div className="flex items-start justify-between gap-3">
				<div>
					<div className="text-[22px] font-semibold leading-none text-neutral-900">
						<svg role="presentation" viewBox="0 0 123 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-4 sm:h-5">
							<path d="M9.46794 7.27676c-.26447.41102-.51815.82872-.76373 1.25043-.22669-.34164-.45338-.68327-.68277-1.0249l-.0027-.00267c-.44798-.65124-3.17366.25622-2.86736.73531.63015.93549 2.03886 3.06537 2.11038 3.17207.32924.4885.87168.5392 1.93226.287.56943-.1562.82718-.6966.91618-.8968.0783-.1722.4925-1.0436.7165-1.47331.6841-1.31716 1.4668-2.59562 2.3357-3.81802.2052-.28692.4129-.57117.6275-.85142.5276-.6926 1.0822-1.36653 1.6637-2.0151.6072-.67926 1.5869-1.6361 2.2224-2.284672.2645-.2709048-1.8877-.4217039-2.5948.218859-.7057.667253-1.7029 1.693483-2.3519 2.419453-.5492.61388-1.0754 1.24777-1.5774 1.89901-.5964.77267-1.15906 1.56804-1.68396 2.38609v-.00133Z" fill="#040154"></path>
							<path d="M26.5527 10.9073c0-3.30154 2.3506-5.6476 5.5782-5.6476 3.6244 0 5.8198 2.75843 5.3367 6.2348h-8.1487c.2199 1.8029 1.3615 2.7584 2.9213 2.7584 1.2522 0 2.0861-.5645 2.3506-1.4559h2.7675c-.417 2.238-2.306 3.758-5.0951 3.758-3.4476 0-5.7105-2.3461-5.7105-5.6477Zm8.0394-1.43323c-.0445-1.25977-1.0322-2.08583-2.4598-2.08583s-2.3276.69528-2.6798 2.08583h5.1396ZM38.3911 10.8847c0-3.25753 2.3506-5.62628 5.6443-5.62628 3.0091 0 4.9197 1.65079 5.249 4.21437h-2.7891c-.22-1.12899-1.1645-1.86831-2.4383-1.86831-1.6246 0-2.8552 1.32517-2.8552 3.28022 0 1.955 1.2306 3.3229 2.8552 3.3229 1.3183 0 2.2845-.7166 2.5044-1.8683h2.7891c-.3292 2.3461-2.3722 4.2144-5.2935 4.2144-3.2951 0-5.6659-2.3888-5.6659-5.669ZM54.9082 11.5159l-1.4721 1.4119v3.4537H50.647V.119263h2.7891V9.29932l4.1506-3.86606h3.6904l-4.3489 4.14898 4.7227 6.79926h-3.3383l-3.4044-4.8656Z" fill="#FF3F3F"></path>
							<path d="M61.3222 13.3402c0-2.1499 1.4937-3.3016 4.8535-3.64855l2.1523-.21752v-.23888c0-1.15168-.8353-1.84696-2.0861-1.84696-1.1645 0-1.9552.62989-2.1091 1.75888h-2.7459c.3077-2.17257 2.1522-3.88875 4.8536-3.88875 2.8552 0 4.8752 1.54269 4.8752 4.34382v6.77666h-2.7891v-1.3906c-.4831.8688-1.7568 1.564-3.1629 1.564-2.3276 0-3.8429-1.3251-3.8429-3.2148l.0014.0027Zm4.3921 1.1076c1.603 0 2.6137-1.2597 2.6137-2.8238v-.1735l-2.043.2603c-1.5369.1734-2.2183.6085-2.2183 1.52 0 .7606.6369 1.217 1.6476 1.217Z" fill="#FF3F3F"></path>
							<path d="M73.6202 12.7309V7.66911h-1.7784V5.43114h1.7784V2.75946h2.7891v2.67168h2.6137v2.23797h-2.6137v4.82159c0 1.1076.5708 1.6721 1.4938 1.6721.3737 0 .8568-.0867 1.2076-.2175V16.27c-.483.1948-1.0106.2829-1.5814.2829-2.2399 0-3.9091-1.3465-3.9091-3.8234v.0014ZM80.3417 5.43319h2.7891v1.4773c.6153-.99955 1.9106-1.65079 3.2505-1.65079.4615 0 .8785.0654 1.2293.21753v2.60629c-.5046-.19617-1.0107-.26023-1.4937-.26023-1.603 0-2.9875 1.34651-2.9875 4.40921v4.149h-2.7891V5.43319h.0014ZM87.8539 13.3402c0-2.1499 1.4937-3.3016 4.8536-3.64855l2.1522-.21752v-.23888c0-1.15168-.8353-1.84696-2.0861-1.84696-1.1645 0-1.9552.62989-2.109 1.75888h-2.7459c.3076-2.17257 2.1522-3.88875 4.8536-3.88875 2.8552 0 4.8751 1.54269 4.8751 4.34382v6.77666h-2.7891v-1.3906c-.483.8688-1.7568 1.564-3.1628 1.564-2.3276 0-3.843-1.3251-3.843-3.2148l.0014.0027Zm4.3921 1.1076c1.603 0 2.6137-1.2597 2.6137-2.8238v-.1735l-2.0429.2603c-1.5369.1734-2.2183.6085-2.2183 1.52 0 .7606.6368 1.217 1.6475 1.217ZM98.9438 10.9074c0-3.4537 2.1742-5.64762 5.4472-5.64762 1.406 0 2.746.58718 3.338 1.52V.119263h2.811V16.3815h-2.811v-1.3678c-.593.9341-1.955 1.5427-3.338 1.5427-3.272 0-5.4472-2.194-5.4472-5.6477v-.0013Zm5.7982 3.3016c1.778 0 2.987-1.3679 2.987-3.3016 0-1.93369-1.207-3.30156-2.987-3.30156s-2.987 1.32516-2.987 3.30156 1.252 3.3016 2.987 3.3016ZM111.967 10.9073c0-3.30154 2.351-5.6476 5.578-5.6476 3.625 0 5.82 2.75843 5.337 6.2348h-8.149c.22 1.8029 1.362 2.7584 2.922 2.7584 1.252 0 2.086-.5645 2.35-1.4559h2.768c-.417 2.238-2.306 3.758-5.095 3.758-3.448 0-5.711-2.3461-5.711-5.6477Zm8.04-1.43323c-.045-1.25977-1.033-2.08583-2.46-2.08583-1.428 0-2.328.69528-2.68 2.08583h5.14Z" fill="#040154"></path>
							<path d="M11.2751 11.4906c-.4722 1.4907-1.87286 2.5449-3.60947 2.5449-2.6798 0-4.67818-1.9337-4.67818-5.25659 0-3.32292 1.97679-5.25662 4.67818-5.25662 1.12806 0 2.08744.40703 2.74727 1.08896.4223-.6032 1.0943-1.50265 1.7663-2.14322-1.151-.92214-2.70274-1.46528-4.51357-1.46528C3.27216 1.00275 0 3.86926 0 8.77891c0 4.90969 3.33828 7.77619 7.66563 7.77619 3.18987 0 5.51207-1.7149 6.38377-4.129l-2.7743-.9355ZM17.5259 2.02625v4.84158c.5708-.82606 1.8675-1.60674 3.6014-1.60674 2.3938 0 4.1074 1.52 4.1074 4.08358v7.03823h-2.7891V9.93185c0-1.4119-.8568-2.25931-2.1306-2.25931-1.7352 0-2.7891 1.45594-2.7891 3.95276v4.7576h-2.7891V4.80335s.6976-.98753 2.7891-2.7771Z" fill="#FF3F3F"></path>
						</svg>
					</div>
					<p className="mt-1 text-xs text-neutral-600">Rated highly by real customers</p>
				</div>
				<a href={(site as any).profiles?.checkatrade || "#"} target="_blank" rel="noreferrer" className="text-xs font-medium text-neutral-700 underline">
					View profile
				</a>
			</div>

			<div className="mt-4 grid grid-cols-[80px_1fr] items-start gap-6">
				<div className="relative h-16 w-16">
					<svg viewBox="0 0 36 36" className="h-16 w-16">
						<circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="4" />
						{/* progress ring */}
						<circle
							cx="18"
							cy="18"
							r="16"
							fill="none"
							stroke="#0f172a"
							strokeWidth="4"
							strokeDasharray={2 * Math.PI * 16}
							strokeDashoffset={2 * Math.PI * 16 * (1 - ratings[index].score / 10)}
							strokeLinecap="round"
							transform="rotate(-90 18 18)"
						/>
					</svg>
					<div className="absolute inset-0 grid place-items-center text-base font-semibold text-neutral-900">
						{ratings[index].score.toFixed(2)}
					</div>
				</div>
				<div className="w-full min-w-0">
					{/* Fixed height container to prevent layout shifts */}
					<div className="relative w-full h-16">
						{ratings.map((r, i) => (
							<div
								key={r.label}
								className={`absolute inset-0 transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
							>
								<div className="text-sm font-semibold uppercase tracking-wide text-neutral-900">{r.label}</div>
								<p className="mt-1 text-sm text-neutral-700 leading-tight">{r.blurb}</p>
							</div>
						))}
					</div>
					<div className="mt-2 flex items-center gap-2">
						{ratings.map((_, i) => (
							<button
								key={i}
								aria-label={`Show ${ratings[i].label}`}
								onClick={() => setIndex(i)}
								className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-neutral-900" : "bg-neutral-300"}`}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
				<p className="text-xs text-neutral-700">Need help now? Request a quick callback.</p>
				<form action={onSubmit} className="mt-2 grid gap-2">
					<Input name="name" placeholder="Your name" required className="w-full" />
					<select name="urgency" defaultValue="urgent" className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400">
						<option value="urgent">Urgently — help me quickly please</option>
						<option value="norush">No rush</option>
					</select>
					<Input name="phone" placeholder="Phone" inputMode="tel" required className="w-full" />
					{/* honeypot */}
					<input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
					<Button type="submit" size="md" className="w-full">Call me</Button>
				</form>
				{status === "success" && (
					<p className="mt-2 text-xs text-green-700" aria-live="polite">Thanks — we\'ll call you shortly.</p>
				)}
				{status === "error" && error && (
					<p className="mt-2 text-xs text-red-600" aria-live="polite">{error}</p>
				)}
			</div>
		</div>
	);
} 