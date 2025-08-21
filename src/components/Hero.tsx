import Image from "next/image";
import Container from "@/components/Container";
import { site } from "../../site.config";
import { telHref } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import CheckatradeWidget from "@/components/CheckatradeWidget";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<Image src="/images/power-estate-london-hero-image.webp" alt="Plumbing hero" fill priority sizes="100vw" className="object-cover" />
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20" />
			</div>
			<Container className="py-24 md:py-32">
				<div className="grid items-start gap-8 md:grid-cols-2">
					<Reveal>
						<div className="max-w-2xl text-white">
							<p className="text-white/80">Middlesex & West London</p>
							<h1 className="text-3xl md:text-5xl font-semibold leading-tight">
								Plumbing & Heating Experts — Fast, Trusted, Local
							</h1>
							<p className="mt-4 text-white/90">
								Emergency repairs, boiler installs, bathrooms and more. Same-day availability and clear pricing.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<a href={telHref(site.phones.primary)} className="inline-flex h-11 items-center rounded-md bg-white px-5 font-medium text-neutral-900">Call {site.phones.primary}</a>
								<a href="#quote" className="inline-flex h-11 items-center rounded-md bg-white/10 px-5 font-medium text-white ring-1 ring-white/30">Get a quick quote</a>
							</div>
						</div>
					</Reveal>
					<div className="md:justify-self-end md:self-center">
						<CheckatradeWidget />
					</div>
				</div>
			</Container>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
		</section>
	);
} 