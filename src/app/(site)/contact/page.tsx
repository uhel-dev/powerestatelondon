"use client";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	phone: z.string().min(7),
	message: z.string().min(10),
	consent: z.literal(true),
});

export default function ContactPage() {
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(formData: FormData) {
		setError(null);
		setStatus("submitting");
		const payload = Object.fromEntries(formData.entries());
		const parsed = schema.safeParse({
			name: payload.name,
			email: payload.email,
			phone: payload.phone,
			message: payload.message,
			consent: payload.consent === "on",
		});
		if (!parsed.success) {
			setStatus("error");
			setError("Please check the form fields and try again.");
			return;
		}
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(parsed.data),
			});
			const json = await res.json();
			if (json.ok) setStatus("success"); else throw new Error("Request failed");
		} catch (e) {
			setStatus("error");
			setError("Something went wrong. Please try again later.");
		}
	}

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
				<Container>
					<div className="relative z-10 text-center max-w-4xl mx-auto">
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
							Get in Touch
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
							Ready to transform your home? Let's discuss your plumbing and heating needs. 
							Our expert team is here to help with professional advice and reliable service.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
								<Phone className="w-5 h-5 mr-2" />
								Call Now: 07838 666 560
							</Button>
							<Button variant="outline" size="lg" className="px-8 py-4 text-lg">
								<Mail className="w-5 h-5 mr-2" />
								Email Us
							</Button>
						</div>
					</div>
				</Container>
			</section>

			{/* Company Information Section */}
			<Section>
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
								Power Estates London
							</h2>
							<p className="text-xl text-gray-600 leading-relaxed mb-6">
								Ivan Borudzhiev trading as Power Estates London
							</p>
							<p className="text-lg text-gray-700 leading-relaxed">
								With over 20 years of experience serving London and the surrounding areas, 
								we've built our reputation on quality workmanship, reliable service, and 
								competitive pricing. From emergency repairs to complete installations, 
								we handle all aspects of plumbing and heating with professionalism and care.
							</p>
						</div>

						<div className="grid gap-6">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<MapPin className="w-6 h-6 text-green-600" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-1">Our Address</h3>
									<p className="text-gray-600">88A, Crispen Road, Feltham, TW13 6QR</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<Phone className="w-6 h-6 text-blue-600" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
									<p className="text-gray-600">07838 666 560</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
									<Mail className="w-6 h-6 text-purple-600" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
									<p className="text-gray-600">dudeivan@yahoo.co.uk</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
									<Clock className="w-6 h-6 text-orange-600" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-1">Service Hours</h3>
									<p className="text-gray-600">
										Monday - Friday: 8:00 AM - 6:00 PM<br />
										Saturday: 9:00 AM - 4:00 PM<br />
										Emergency calls: 24/7
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
							<p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
						</div>

						<form id="form" action={onSubmit} className="space-y-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
									Full Name *
								</label>
								<Input 
									id="name" 
									name="name" 
									required 
									aria-required 
									className="h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500"
									placeholder="Enter your full name"
								/>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
										Email Address *
									</label>
									<Input 
										id="email" 
										name="email" 
										type="email" 
										required 
										aria-required 
										className="h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500"
										placeholder="your@email.com"
									/>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
										Phone Number *
									</label>
									<Input 
										id="phone" 
										name="phone" 
										required 
										aria-required 
										className="h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500"
										placeholder="07838 666 560"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
									Project Details *
								</label>
								<Textarea 
									id="message" 
									name="message" 
									required 
									aria-required 
									rows={5}
									className="text-base border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
									placeholder="Describe your plumbing or heating needs, preferred timeline, and any specific requirements..."
								/>
							</div>

							<div className="flex items-start space-x-3">
								<input 
									type="checkbox" 
									name="consent" 
									id="consent"
									className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
								/>
								<label htmlFor="consent" className="text-sm text-gray-600">
									I agree to be contacted about my enquiry and understand that my information will be used in accordance with our privacy policy.
								</label>
							</div>

							<Button 
								type="submit"
								disabled={status === "submitting"} 
								className="w-full h-14 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
							>
								{status === "submitting" ? (
									<>
										<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
										Sending Message...
									</>
								) : (
									<>
										<CheckCircle className="w-5 h-5 mr-2" />
										Send Message
									</>
								)}
							</Button>

							{/* Status Messages */}
							{status === "success" && (
								<div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
									<CheckCircle className="w-5 h-5 text-green-600" />
									<p className="text-green-800 font-medium">Thank you! We'll be in touch within 24 hours.</p>
								</div>
							)}
							
							{status === "error" && error && (
								<div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
									<AlertCircle className="w-5 h-5 text-red-600" />
									<p className="text-red-800 font-medium">{error}</p>
								</div>
							)}
						</form>
					</div>
				</div>
			</Section>

			{/* Why Choose Us Section */}
			<Section className="bg-gray-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Why Choose Power Estates London?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						We're committed to delivering exceptional service and quality workmanship on every job
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center p-6">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<CheckCircle className="w-8 h-8 text-green-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
						<p className="text-gray-600">Decades of expertise in London's plumbing and heating industry</p>
					</div>

					<div className="text-center p-6">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Clock className="w-8 h-8 text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
						<p className="text-gray-600">Available when you need us most, day or night</p>
					</div>

					<div className="text-center p-6">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<CheckCircle className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
						<p className="text-gray-600">Complete peace of mind with comprehensive insurance coverage</p>
					</div>

					<div className="text-center p-6">
						<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<CheckCircle className="w-8 h-8 text-orange-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
						<p className="text-gray-600">Fair, transparent pricing with no hidden costs</p>
					</div>
				</div>
			</Section>

			{/* WhatsApp Chat Section */}
			<Section className="bg-gradient-to-br from-green-50 to-blue-50">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Don't wait for plumbing issues to get worse. Chat with us directly on WhatsApp for instant support.
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
										Please <strong>WhatsApp</strong> me now using the button below.
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
		</>
	);
}

// Container component for the hero section
function Container({ className, children }: { className?: string; children: React.ReactNode }) {
	return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
} 