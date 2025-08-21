import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import ValueProps from "@/components/ValueProps";
import LogoStrip from "@/components/LogoStrip";
import TestimonialCard from "@/components/TestimonialCard";
import LeadForm from "@/components/LeadForm";
import Container from "@/components/Container";
import { site } from "../../../site.config";
import TrustBar from "@/components/TrustBar";
import InteractiveLead from "@/components/InteractiveLead";

export const dynamic = "force-static";

export default function HomePage() {
	return (
		<>
			<Hero />
			<TrustBar />
			
			{/* Main Forms Section */}
			<section className="bg-gradient-to-b from-neutral-50/80 to-white py-16 md:py-20">
				<Container>
					<div className="mx-auto max-w-6xl">
						{/* Section Header */}
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
								Get Your Free Quote Today
							</h2>
							<p className="mt-3 text-lg text-neutral-600">
								Choose how you'd like to get started - no obligation, just expert advice
							</p>
						</div>
						
						{/* Forms Grid */}
						<div className="grid gap-8 lg:grid-cols-2">
							{/* Multi-step Questionnaire */}
							<div className="order-2 lg:order-1">
								<InteractiveLead />
							</div>
							
							{/* Simple Contact Form */}
							<div className="order-1 lg:order-2">
								<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
									<div className="mb-6">
										<h3 className="text-xl font-semibold text-neutral-900">
											Prefer a simple form?
										</h3>
										<p className="mt-2 text-sm text-neutral-600">
											Tell us about your issue and we'll call you back
										</p>
									</div>
									<LeadForm />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Services Section */}
			<Section 
				title="Our Services" 
				lead="Expert plumbing and heating across Middlesex & West London."
			>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{site.services.map((s) => (
						<ServiceCard key={s.slug} service={s} />
					))}
				</div>
				<div className="mt-8 text-center">
					<a 
						href="/services" 
						className="inline-flex h-12 items-center rounded-lg bg-neutral-900 px-6 font-medium text-white transition-colors hover:bg-neutral-800"
					>
						View all services
					</a>
				</div>
			</Section>

			{/* Trust Section */}
			<section className="bg-neutral-50/50 py-16 md:py-20">
				<Container>
					<div className="text-center">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 md:mb-8">
							Trusted by local homeowners
						</h2>
						<p className="text-neutral-600 max-w-2xl mx-auto mb-8">
							Clear pricing, quality workmanship and friendly service.
						</p>
						<a 
							href="/about" 
							className="inline-flex h-11 items-center rounded-lg bg-neutral-900 px-6 font-medium text-white transition-colors hover:bg-neutral-800"
						>
							Learn more about us
						</a>
					</div>
				</Container>
			</section>

			<ValueProps />
			<CTA />
			
			{/* Testimonials Section */}
			<Section 
				title="Client Testimonials"
				lead="See what our customers say about our service"
			>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{site.testimonials.map((t, i) => (
						<TestimonialCard key={i} t={t} />
					))}
				</div>
			</Section>

			<LogoStrip />
			
			{/* Areas Section */}
			<section className="bg-neutral-50/50 py-16 md:py-20">
				<Container>
					<div className="text-center">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 md:mb-8">
							Areas we cover
						</h2>
						<p className="text-neutral-600 max-w-2xl mx-auto mb-8">
							Serving communities across Middlesex and West London
						</p>
						<p className="mb-6 text-lg text-neutral-700">
							Feltham, Hounslow, Twickenham, Isleworth, Hayes, Uxbridge, Ealing, Hammersmith, Richmond and nearby.
						</p>
						<a 
							href="/contact" 
							className="inline-flex h-12 items-center rounded-lg bg-neutral-900 px-6 font-medium text-white transition-colors hover:bg-neutral-800"
						>
							Get in Touch
						</a>
					</div>
				</Container>
			</section>
		</>
	);
} 