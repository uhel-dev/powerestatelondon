import type { Metadata } from "next";
import { baseMetadata, jsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";
import { site } from "../../site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneBar from "@/components/PhoneBar";

export const metadata: Metadata = baseMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const localBusinessLd = jsonLd("LocalBusiness", {
		name: site.businessName,
		address: site.address,
		telephone: site.phones.primary,
		email: site.email,
		openingHours: site.hours,
		url: SITE_URL,
	});
	return (
		<html lang="en">
			<body className="min-h-dvh bg-white text-neutral-900 antialiased">
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
				<Header />
				<main>{children}</main>
				<Footer />
				<PhoneBar />
			</body>
		</html>
	);
} 