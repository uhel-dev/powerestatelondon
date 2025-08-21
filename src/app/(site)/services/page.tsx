import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { site } from "../../../../site.config";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({ title: `Services — ${site.businessName}` });

export default function ServicesPage() {
	return (
		<Section title="Services" lead="A selection of our most requested plumbing and heating work.">
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{site.services.map((s) => (
					<ServiceCard key={s.slug} service={s} />
				))}
			</div>
		</Section>
	);
} 