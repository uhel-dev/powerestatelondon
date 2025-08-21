import Container from "@/components/Container";
import { site } from "../../site.config";

export default function CTA() {
	return (
		<section className="bg-neutral-900 text-white">
			<Container className="py-10 md:py-12">
				<div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
					<div>
						<h3 className="text-2xl font-semibold">{site.cta.headline}</h3>
						<ul className="mt-3 grid gap-1 text-white/90 md:grid-cols-3">
							{site.cta.bullets.map((b) => (
								<li key={b}>• {b}</li>
							))}
						</ul>
					</div>
					<div className="md:justify-self-end">
						<a href="/contact#form" className="inline-flex h-11 items-center rounded-md bg-white px-5 font-medium text-neutral-900">
							{site.cta.buttonLabel}
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
} 