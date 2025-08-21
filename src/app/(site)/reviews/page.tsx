import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Star, Phone, MessageCircle, Heart, ThumbsUp, Award, Users, CheckCircle, MapPin, Mail, Clock, Shield } from "lucide-react";
import { site } from "../../../../site.config";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({
	title: "Customer Reviews & Testimonials | Power Estates London - 5-Star Rated Plumbing Services",
	description: "Read real customer reviews and testimonials from Power Estates London. 5-star rated plumbing and heating services across London. 1000+ happy customers. Call 07838 666 560 today!"
});

export default function ReviewsPage() {
	const reviewStats = [
		{ number: "5.0", label: "Average Rating", icon: Star, color: "text-yellow-500" },
		{ number: "1000+", label: "Happy Customers", icon: Heart, color: "text-red-500" },
		{ number: "98%", label: "Satisfaction Rate", icon: ThumbsUp, color: "text-green-500" },
		{ number: "24/7", label: "Emergency Support", icon: Clock, color: "text-blue-500" }
	];

	const serviceReviews = [
		{
			service: "General Plumbing",
			rating: 5,
			reviewCount: 450,
			highlight: "Fast response times and quality workmanship"
		},
		{
			service: "Boiler Services",
			rating: 5,
			reviewCount: 320,
			highlight: "Expert diagnosis and reliable repairs"
		},
		{
			service: "Emergency Repairs",
			rating: 5,
			reviewCount: 280,
			highlight: "24/7 availability and quick solutions"
		},
		{
			service: "Bathroom Installations",
			rating: 5,
			reviewCount: 180,
			highlight: "Beautiful finishes and attention to detail"
		}
	];

	const reviewCategories = [
		{
			title: "Emergency Response",
			description: "Customers consistently praise our quick response times and 24/7 availability for urgent plumbing issues.",
			icon: Clock,
			rating: 5.0,
			count: 280
		},
		{
			title: "Work Quality",
			description: "Our craftsmanship and attention to detail receive the highest marks from satisfied customers.",
			icon: Award,
			rating: 5.0,
			count: 450
		},
		{
			title: "Customer Service",
			description: "Professional, friendly, and communicative - our team excels in customer satisfaction.",
			icon: Users,
			rating: 5.0,
			count: 520
		},
		{
			title: "Value for Money",
			description: "Fair pricing, transparent quotes, and no hidden costs make us the preferred choice.",
			icon: CheckCircle,
			rating: 5.0,
			count: 380
		}
	];

	const enhancedTestimonials = [
		{
			...site.testimonials[0],
			service: "General Plumbing",
			location: "North London",
			rating: 5,
			date: "December 2024",
			verified: true
		},
		{
			...site.testimonials[1],
			service: "Boiler Repair",
			location: "Central London",
			rating: 5,
			date: "November 2024",
			verified: true
		},
		{
			...site.testimonials[2],
			service: "Plumbing Service",
			location: "West London",
			rating: 5,
			date: "November 2024",
			verified: true
		},
		{
			name: "Michael T.",
			title: "Emergency Leak Repair",
			quote: "Called at 2 AM with a burst pipe emergency. Ivan arrived within 90 minutes and had the situation under control quickly. Professional, efficient, and saved us from major water damage. Highly recommended!",
			service: "Emergency Repair",
			location: "South London",
			rating: 5,
			date: "October 2024",
			verified: true
		},
		{
			name: "Lisa K.",
			title: "Bathroom Installation",
			quote: "Complete bathroom renovation completed in just 5 days. The quality of work is outstanding and the attention to detail is impressive. Ivan and his team were clean, professional, and finished on time.",
			service: "Bathroom Installation",
			location: "East London",
			rating: 5,
			date: "October 2024",
			verified: true
		},
		{
			name: "Robert P.",
			title: "Heating System Upgrade",
			quote: "Upgraded our entire heating system with smart controls. The difference in efficiency is remarkable and our energy bills have dropped significantly. Excellent work and great value.",
			service: "Heating Installation",
			location: "Greater London",
			rating: 5,
			date: "September 2024",
			verified: true
		}
	];

	return (
		<>
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
				<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-4xl mx-auto">
						<div className="flex justify-center items-center space-x-2 mb-6">
							{[1, 2, 3, 4, 5].map((star) => (
								<Star key={star} className="w-8 h-8 text-yellow-400 fill-current" />
							))}
						</div>
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
							Customer Reviews & Testimonials
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
							Join 1000+ satisfied London customers who trust Power Estates London 
							with their plumbing and heating needs. Read real experiences from 
							real people across Greater London.
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

			{/* Review Stats Section */}
			<Section>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{reviewStats.map((stat, index) => {
						const IconComponent = stat.icon;
						return (
							<div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<IconComponent className={`w-8 h-8 ${stat.color}`} />
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						);
					})}
				</div>
			</Section>

			{/* Service Ratings Section */}
			<Section className="bg-gray-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Service Ratings by Category
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						See how we perform across different plumbing and heating services
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{serviceReviews.map((service, index) => (
						<div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
							<div className="text-center">
								<h3 className="text-lg font-semibold text-gray-900 mb-3">{service.service}</h3>
								<div className="flex justify-center items-center space-x-1 mb-3">
									{[1, 2, 3, 4, 5].map((star) => (
										<Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
									))}
								</div>
								<div className="text-2xl font-bold text-gray-900 mb-2">{service.rating}.0</div>
								<div className="text-sm text-gray-600 mb-3">{service.reviewCount} reviews</div>
								<p className="text-sm text-gray-700">{service.highlight}</p>
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* Review Categories Section */}
			<Section>
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						What Our Customers Say About Us
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Discover why London homeowners consistently choose Power Estates London 
						for their plumbing and heating needs
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{reviewCategories.map((category, index) => {
						const IconComponent = category.icon;
						return (
							<div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<div className="flex items-start space-x-4">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
										<IconComponent className="w-8 h-8 text-green-600" />
									</div>
									<div className="flex-1">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
											<div className="flex items-center space-x-1">
												<Star className="w-5 h-5 text-yellow-400 fill-current" />
												<span className="text-lg font-bold text-gray-900">{category.rating}</span>
											</div>
										</div>
										<p className="text-gray-600 leading-relaxed mb-3">{category.description}</p>
										<div className="text-sm text-gray-500">{category.count} customer reviews</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Section>

			{/* Enhanced Testimonials Section */}
			<Section className="bg-gradient-to-br from-green-50 to-blue-50">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Real Customer Stories
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Read detailed testimonials from satisfied customers across London
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					{enhancedTestimonials.map((testimonial, index) => (
						<div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
							<div className="flex items-start justify-between mb-4">
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
									<p className="text-gray-600 mb-2">{testimonial.title}</p>
									<div className="flex items-center space-x-2 text-sm text-gray-500">
										<MapPin className="w-4 h-4" />
										<span>{testimonial.location}</span>
									</div>
								</div>
								<div className="text-right">
									<div className="flex items-center space-x-1 mb-2">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
										))}
									</div>
									<div className="text-sm text-gray-500">{testimonial.date}</div>
									{testimonial.verified && (
										<div className="flex items-center space-x-1 text-green-600 text-xs">
											<CheckCircle className="w-3 h-3" />
											<span>Verified</span>
										</div>
									)}
								</div>
							</div>
							
							<blockquote className="text-gray-700 leading-relaxed mb-4">
								"{testimonial.quote}"
							</blockquote>
							
							<div className="flex items-center justify-between">
								<div className="text-sm text-gray-500">
									Service: <span className="font-medium text-gray-700">{testimonial.service}</span>
								</div>
								<div className="flex items-center space-x-2">
									<Shield className="w-4 h-4 text-green-600" />
									<span className="text-sm text-green-600 font-medium">Trusted Service</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</Section>

			{/* Trust Indicators Section */}
			<Section>
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
						Why Customers Trust Power Estates London
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Our commitment to excellence has earned us the trust of thousands of London homeowners
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="text-center p-6">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Award className="w-8 h-8 text-green-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Checkatrade Verified</h3>
						<p className="text-gray-600">Official verification of our credentials and customer satisfaction</p>
					</div>

					<div className="text-center p-6">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Shield className="w-8 h-8 text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
						<p className="text-gray-600">Complete peace of mind with comprehensive insurance coverage</p>
					</div>

					<div className="text-center p-6">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Users className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
						<p className="text-gray-600">20+ years serving London with deep local knowledge</p>
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