import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Star, MapPin, Phone, MessageCircle, Award, Users, Home, Wrench, Droplets, Zap, Mail, Building, FileText, ThumbsUp, Heart } from "lucide-react";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({
	title: "About Power Estates London | 20+ Years Expert Plumbing & Heating Services",
	description: "Meet Ivan Borudzhiev and Power Estates London. 20+ years serving London with expert plumbing, heating, and emergency services. Fully insured, 5-star rated, 24/7 support. Call 07838 666 560 today!"
});

export default function AboutPage() {
	const companyStats = [
		{ number: "20+", label: "Years Experience", icon: Clock },
		{ number: "1000+", label: "Happy Customers", icon: Heart },
		{ number: "24/7", label: "Emergency Support", icon: Shield },
		{ number: "5-Star", label: "Customer Rating", icon: Star }
	];

	const coreValues = [
		{
			title: "Quality Craftsmanship",
			description: "We never compromise on quality. Every job is completed to the highest standards using premium materials and proven techniques.",
			icon: Award
		},
		{
			title: "Customer First",
			description: "Your satisfaction is our priority. We listen, communicate clearly, and go above and beyond to exceed expectations.",
			icon: Users
		},
		{
			title: "Reliability",
			description: "When we say we'll be there, we mean it. Punctual, professional, and dependable service every time.",
			icon: ThumbsUp
		},
		{
			title: "Transparency",
			description: "No hidden costs, no surprises. We provide clear quotes and honest advice about what needs to be done.",
			icon: FileText
		}
	];

	const certifications = [
		"Gas Safe Registered Engineer",
		"WaterSafe Approved Plumber",
		"Fully Insured & Licensed",
		"Checkatrade Verified",
		"20+ Years Industry Experience",
		"London Local Authority Approved"
	];

	const serviceAreas = [
		"Central London", "North London", "South London", "East London", 
		"West London", "Greater London", "M25 Surrounding Areas", "Feltham", 
		"Hounslow", "Richmond", "Kingston", "Brentford", "Isleworth"
	];

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
				<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
							About Power Estates London
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
							Your trusted partner for expert plumbing and heating services across London. 
							With over 20 years of experience, we've built our reputation on quality, 
							reliability, and exceptional customer service.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
								<Phone className="w-5 h-5 mr-2" />
								Call Now: 07838 666 560
							</Button>
							<Button variant="outline" size="lg" className="px-8 py-4 text-lg">
								<MessageCircle className="w-5 h-5 mr-2" />
								WhatsApp Us
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Company Stats Section */}
			<Section>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{companyStats.map((stat, index) => {
						const IconComponent = stat.icon;
						return (
							<div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<IconComponent className="w-8 h-8 text-green-600" />
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						);
					})}
				</div>
			</Section>

			{/* Company Story Section */}
			<Section className="bg-gray-50">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
							Our Story: Building Trust in London
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Power Estates London was founded by Ivan Borudzhiev with a simple mission: 
							to provide London homeowners and businesses with reliable, professional 
							plumbing and heating services they can trust.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							Starting as a one-man operation in 2003, we've grown into one of London's 
							most trusted plumbing companies. Our success is built on thousands of 
							satisfied customers who appreciate our attention to detail, fair pricing, 
							and commitment to quality.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed">
							Today, we serve the entire Greater London area with a team of skilled 
							engineers, maintaining the same personal touch and high standards that 
							made us successful from day one.
						</p>
					</div>

					<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100">
						<div className="text-center mb-6">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Company Details</h3>
							<p className="text-gray-600">Power Estates London - Your Local Experts</p>
						</div>
						
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<Building className="w-4 h-4 text-green-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Company Name</h4>
									<p className="text-gray-600">Ivan Borudzhiev trading as Power Estates London</p>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
									<MapPin className="w-4 h-4 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Address</h4>
									<p className="text-gray-600">88A, Crispen Road, Feltham, TW13 6QR</p>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
									<Phone className="w-4 h-4 text-purple-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Phone</h4>
									<p className="text-gray-600">07838 666 560</p>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
									<Mail className="w-4 h-4 text-orange-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Email</h4>
									<p className="text-gray-600">dudeivan@yahoo.co.uk</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Core Values Section */}
			<Section>
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Our Core Values
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						These principles guide everything we do and have made us London's trusted 
						plumbing and heating specialists for over two decades.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{coreValues.map((value, index) => {
						const IconComponent = value.icon;
						return (
							<div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<div className="flex items-start space-x-4">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
										<IconComponent className="w-8 h-8 text-green-600" />
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
										<p className="text-gray-600 leading-relaxed">{value.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Section>

			{/* Certifications & Credentials Section */}
			<Section className="bg-gradient-to-br from-green-50 to-blue-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Professional Credentials & Certifications
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Your peace of mind is our priority. We maintain the highest professional 
						standards and certifications in the industry.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{certifications.map((cert, index) => (
						<div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
							<div className="flex items-center space-x-3">
								<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
								<span className="text-gray-700 font-medium">{cert}</span>
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* Service Areas Section */}
			<Section>
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
							London Service Areas
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							We proudly serve the entire Greater London area, from the heart of the city 
							to the surrounding suburbs. Our local knowledge and quick response times 
							make us the preferred choice for London homeowners and businesses.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed">
							Whether you're in Central London, the suburbs, or anywhere within the M25, 
							our team can reach you quickly for both scheduled appointments and 
							emergency callouts.
						</p>
					</div>

					<div className="bg-gray-100 rounded-2xl p-8 lg:p-10">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas We Cover</h3>
						<div className="grid grid-cols-2 gap-3">
							{serviceAreas.map((area, index) => (
								<div key={index} className="flex items-center space-x-2">
									<MapPin className="w-4 h-4 text-green-600" />
									<span className="text-sm text-gray-700">{area}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>

			{/* Why Choose Us Section */}
			<Section className="bg-gray-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Why London Homeowners Choose Power Estates
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						In a city with thousands of plumbers, here's what makes us stand out and 
						why our customers keep coming back.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<div className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Clock className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Response Times</h3>
							<p className="text-gray-600">Same-day service for most jobs, emergency response within 2-4 hours across London.</p>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Shield className="w-8 h-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Insured & Licensed</h3>
							<p className="text-gray-600">Complete peace of mind with comprehensive insurance and all necessary licenses.</p>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="w-8 h-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Customer Service</h3>
							<p className="text-gray-600">Consistently excellent reviews and ratings from satisfied London customers.</p>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<div className="text-center">
							<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Wrench className="w-8 h-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Knowledge</h3>
							<p className="text-gray-600">Deep understanding of London's diverse property types and plumbing systems.</p>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<div className="text-center">
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Droplets className="w-8 h-8 text-red-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Services</h3>
							<p className="text-gray-600">24/7 availability for urgent plumbing issues that can't wait.</p>
						</div>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<div className="text-center">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Zap className="w-8 h-8 text-indigo-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Solutions</h3>
							<p className="text-gray-600">Latest techniques and equipment for efficient, long-lasting repairs.</p>
						</div>
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
		</>
	);
} 