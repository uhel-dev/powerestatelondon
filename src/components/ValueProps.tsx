import Container from "@/components/Container";
import { site } from "../../site.config";
import { ShieldCheck, Clock, BadgePoundSterling, FileCheck } from "lucide-react";

const icons = [Clock, BadgePoundSterling, FileCheck, ShieldCheck];

export default function ValueProps() {
	return (
		<section className={`py-12 md:py-16`}>
			<Container>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{site.valueProps.map((v, i) => {
						const Icon = icons[i % icons.length];
						return (
							<div key={v.title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
								<Icon className="h-6 w-6 text-neutral-900" aria-hidden />
								<h3 className="mt-3 font-semibold">{v.title}</h3>
								<p className="mt-1 text-sm text-neutral-600">{v.text}</p>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
} 