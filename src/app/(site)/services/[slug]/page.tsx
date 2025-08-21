import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { site } from "../../../../../site.config";
import type { Metadata } from "next";
import { baseMetadata, jsonLd } from "@/lib/seo";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Star, MapPin, Phone, MessageCircle, Wrench, Droplets, Zap, Home, Users, Award, Mail } from "lucide-react";

export async function generateStaticParams() {
	return site.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata | Promise<Metadata> {
	return (async () => {
		const { slug } = await params;
		const svc = site.services.find((s) => s.slug === slug);
		if (!svc) return baseMetadata({ title: `Service — ${site.businessName}` });
		return baseMetadata({ 
			title: `${svc.name} Services London | Expert Plumbing & Repairs — ${site.businessName}`, 
			description: `Professional ${svc.name.toLowerCase()} services across London. 20+ years experience, same-day emergency repairs, free quotes. Call 07838 666 560 for immediate assistance.` 
		});
	})();
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
	return <AsyncService params={params} />;
}

async function AsyncService({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const svc = site.services.find((s) => s.slug === slug);
	if (!svc) return notFound();
	
	const serviceLd = jsonLd("Service", { 
		name: svc.name, 
		areaServed: "London, UK", 
		provider: site.businessName,
		description: svc.short,
		serviceType: "Plumbing Services"
	});
	
	const breadcrumbLd = jsonLd("BreadcrumbList", {
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Services", item: "/services" },
			{ "@type": "ListItem", position: 2, name: svc.name, item: `/services/${svc.slug}` },
		],
	});

	// Enhanced content for general plumbing
	const enhancedFeatures = [
		"Emergency leak detection and repair",
		"Pipe installation and replacement",
		"Advanced drain cleaning and unblocking",
		"Professional fixture fitting and repair",
		"Water pressure optimization",
		"Plumbing system diagnostics",
		"Preventive maintenance services",
		"24/7 emergency response"
	];

	const serviceAreas = [
		"Central London", "North London", "South London", "East London", 
		"West London", "Greater London", "M25 Surrounding Areas"
	];

	const commonProblems = [
		{
			title: "Dripping Taps & Leaks",
			description: "Worn washers, damaged seals, and pipe corrosion causing water waste and damage.",
			icon: Droplets
		},
		{
			title: "Blocked Drains",
			description: "Build-up of grease, hair, and debris leading to slow drainage and backups.",
			icon: Wrench
		},
		{
			title: "Low Water Pressure",
			description: "Mineral deposits, pipe blockages, and system issues affecting water flow.",
			icon: Zap
		},
		{
			title: "Burst Pipes",
			description: "Freezing temperatures, corrosion, and high pressure causing pipe failures.",
			icon: Home
		}
	];

	return (
		<>
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="relative h-80 lg:h-96 w-full">
					<Image src={svc.image} alt={`${svc.name} services in London`} fill sizes="100vw" className="object-cover" />
					<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
					<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white">
						<div className="max-w-4xl">
							<h1 className="text-4xl lg:text-6xl font-bold mb-6">
								Professional {svc.name} Services
							</h1>
							<p className="text-xl lg:text-2xl text-white/90 max-w-3xl mb-8 leading-relaxed">
								{svc.short} Expert solutions across London with 20+ years of experience. 
								Same-day emergency repairs, free quotes, and guaranteed workmanship.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
									<Phone className="w-5 h-5 mr-2" />
									Call Now: 07838 666 560
								</Button>
								<Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
									<MessageCircle className="w-5 h-5 mr-2" />
									WhatsApp Us
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Power Estates Section */}
			<Section className="bg-gradient-to-br from-green-50 to-blue-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Why Choose Power Estates London for {svc.name}?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						With over two decades serving London, we've built our reputation on quality, 
						reliability, and exceptional customer service.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center p-6 bg-white rounded-2xl shadow-lg">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Clock className="w-8 h-8 text-green-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
						<p className="text-gray-600">Decades of expertise in London's plumbing industry</p>
					</div>

					<div className="text-center p-6 bg-white rounded-2xl shadow-lg">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Shield className="w-8 h-8 text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
						<p className="text-gray-600">Complete peace of mind with comprehensive coverage</p>
					</div>

					<div className="text-center p-6 bg-white rounded-2xl shadow-lg">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Star className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Rated</h3>
						<p className="text-gray-600">Consistently excellent customer reviews and ratings</p>
					</div>

					<div className="text-center p-6 bg-white rounded-2xl shadow-lg">
						<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Users className="w-8 h-8 text-orange-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Local Experts</h3>
						<p className="text-gray-600">Deep knowledge of London's plumbing systems</p>
					</div>
				</div>
			</Section>

			{/* Comprehensive Services Section */}
			<Section>
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
							Comprehensive {svc.name} Solutions
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-8">
							From emergency repairs to preventive maintenance, our expert team handles all aspects 
							of residential and commercial plumbing with precision and care. We use the latest 
							techniques and high-quality materials to ensure lasting solutions.
						</p>
						
						<div className="grid gap-4">
							{enhancedFeatures.map((feature, index) => (
								<div key={index} className="flex items-start space-x-3">
									<CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
									<span className="text-gray-700">{feature}</span>
								</div>
							))}
						</div>
					</div>

					<div className="bg-gray-100 rounded-2xl p-8 lg:p-10">
						<div className="text-center">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas We Cover</h3>
							<p className="text-gray-600 mb-6">Professional plumbing services across Greater London</p>
						</div>
						
						<div className="grid grid-cols-2 gap-3">
							{serviceAreas.map((area, index) => (
								<div key={index} className="flex items-center space-x-2">
									<MapPin className="w-4 h-4 text-green-600" />
									<span className="text-sm text-gray-700">{area}</span>
								</div>
							))}
						</div>

						<div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
							<div className="flex items-center space-x-3">
								<Award className="w-6 h-6 text-green-600" />
								<div>
									<h4 className="font-semibold text-green-800">Free Quote Guarantee</h4>
									<p className="text-sm text-green-700">No hidden costs, transparent pricing</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Common Plumbing Problems Section */}
			<Section className="bg-gray-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Common {svc.name} Problems We Solve
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Don't let plumbing issues disrupt your daily life. Our expert team quickly identifies 
						and resolves problems with lasting solutions.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{commonProblems.map((problem, index) => {
						const IconComponent = problem.icon;
						return (
							<div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
										<IconComponent className="w-6 h-6 text-green-600" />
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
										<p className="text-gray-600 leading-relaxed">{problem.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Section>

			{/* Emergency Services Section */}
			<Section>
				<div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
								24/7 Emergency {svc.name} Services
							</h2>
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								Plumbing emergencies don't wait for business hours. Our team is available 
								around the clock to handle urgent situations, from burst pipes to severe leaks. 
								We understand that quick response times are crucial to preventing costly damage.
							</p>
							
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-600" />
									<span className="text-gray-700">Same-day emergency response</span>
								</div>
								<div className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-600" />
									<span className="text-gray-700">24/7 phone support</span>
								</div>
								<div className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-600" />
									<span className="text-gray-700">Emergency repair specialists</span>
								</div>
							</div>
						</div>

						<div className="text-center">
							<div className="bg-white rounded-2xl p-8 shadow-lg">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Hotline</h3>
								<p className="text-gray-600 mb-6">Available 24/7 for urgent plumbing issues</p>
								<Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg w-full">
									<Phone className="w-5 h-5 mr-2" />
									Call Emergency: 07838 666 560
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Process & Guarantee Section */}
			<Section className="bg-gray-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Our {svc.name} Process & Guarantee
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						We follow a proven process to ensure quality workmanship and complete customer satisfaction
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-2xl font-bold text-green-600">1</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
						<p className="text-gray-600">Thorough inspection and diagnosis of the issue</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-2xl font-bold text-blue-600">2</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Quote</h3>
						<p className="text-gray-600">Transparent pricing with no hidden costs</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-2xl font-bold text-purple-600">3</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Service</h3>
						<p className="text-gray-600">Expert workmanship using quality materials</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-2xl font-bold text-orange-600">4</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
						<p className="text-gray-600">Testing and guarantee on all work completed</p>
					</div>
				</div>

				<div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
					<div className="text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
						<p className="text-lg text-gray-700 mb-6">
							We stand behind our work with comprehensive guarantees on all parts and labor. 
							Your satisfaction is our priority, and we won't rest until you're completely happy with our service.
						</p>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="text-center">
								<Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
								<h4 className="font-semibold text-gray-900 mb-2">Workmanship Guarantee</h4>
								<p className="text-gray-600">All repairs guaranteed for 12 months</p>
							</div>
							<div className="text-center">
								<Star className="w-12 h-12 text-blue-600 mx-auto mb-3" />
								<h4 className="font-semibold text-gray-900 mb-2">Parts Warranty</h4>
								<p className="text-gray-600">Manufacturer warranties on all parts</p>
							</div>
							<div className="text-center">
								<Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
								<h4 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
								<p className="text-gray-600">100% satisfaction guarantee</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* FAQs Section */}
			<Section>
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Get answers to common questions about our {svc.name.toLowerCase()} services
					</p>
				</div>

				<Accordion className="max-w-4xl mx-auto">
					<AccordionItem title="How quickly can you attend to plumbing emergencies?">
						We prioritize emergency calls and typically respond within 2-4 hours. For urgent situations like burst pipes or severe leaks, we can often attend within 1-2 hours depending on your location in London.
					</AccordionItem>
					<AccordionItem title="Do you provide free quotes for plumbing work?">
						Yes, we provide free, no-obligation quotes for all plumbing work. Our quotes are detailed and transparent, with no hidden costs. We'll explain exactly what needs to be done and provide a fixed price.
					</AccordionItem>
					<AccordionItem title="Which areas of London do you cover?">
						We serve all of Greater London including Central, North, South, East, and West London. We also cover surrounding areas within the M25. Contact us to confirm coverage for your specific location.
					</AccordionItem>
					<AccordionItem title="What guarantees do you provide on your work?">
						All our workmanship is guaranteed for 12 months, and we use high-quality parts that come with manufacturer warranties. We're committed to your complete satisfaction and will return to fix any issues at no additional cost.
					</AccordionItem>
					<AccordionItem title="Do you work on weekends and bank holidays?">
						Yes, we provide emergency services 24/7, including weekends and bank holidays. For non-emergency work, we can schedule appointments at times that suit you, including evenings and weekends.
					</AccordionItem>
					<AccordionItem title="What types of properties do you work on?">
						We work on all types of properties including houses, flats, apartments, commercial buildings, and rental properties. Our team is experienced with both modern and period properties throughout London.
					</AccordionItem>
				</Accordion>
			</Section>

			{/* WhatsApp Chat Section */}
			<Section className="bg-gradient-to-br from-green-50 to-blue-50">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Don't wait for plumbing issues to get worse. Chat with us directly on WhatsApp for instant support and quotes.
						</p>
					</div>

					{/* WhatsApp Chat Widget */}
					<div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
						{/* Header */}
						<div className="bg-green-600 px-6 py-4 flex items-center space-x-3">
							<div className="relative">
								<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
									<Phone className="w-6 h-6 text-white" />
								</div>
								<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
							</div>
							<div className="flex-1">
								<h3 className="text-white font-bold text-lg">Power Estates London</h3>
								<p className="text-green-100 text-sm">Typically replies within a day</p>
							</div>
						</div>

						{/* Chat Area */}
						<div className="bg-gray-50 p-6 min-h-[200px] flex flex-col justify-between">
							{/* Message Bubble */}
							<div className="flex justify-start mb-4">
								<div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-xs shadow-sm">
									<div className="text-gray-500 text-xs mb-1">Power Estates London</div>
									<div className="text-gray-800">
										Hi there,<br />
										Need help with your plumbing? <strong>WhatsApp</strong> me now for instant support!
									</div>
									<div className="text-gray-400 text-xs text-right mt-2">12:47</div>
								</div>
							</div>

							{/* WhatsApp Button */}
							<a 
								href="https://api.whatsapp.com/send/?phone=%2B447828666560&text&type=phone_number&app_absent=0"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-2xl text-center transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
							>
								<MessageCircle className="w-5 h-5" />
								<span>Start Chat</span>
							</a>
						</div>
					</div>

					{/* Alternative Contact Methods */}
					<div className="mt-8 text-center">
						<p className="text-gray-600 mb-4">Prefer other ways to reach us?</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg">
								<Phone className="w-5 h-5 mr-2" />
								Call Now: 07838 666 560
							</Button>
							<Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg">
								<Mail className="w-5 h-5 mr-2" />
								Send Email
							</Button>
						</div>
					</div>
				</div>
			</Section>

			<CTA />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
		</>
	);
} 