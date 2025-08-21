import type { Metadata } from "next";
import { site } from "../../site.config";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function baseMetadata(overrides?: Partial<Metadata>): Metadata {
	const title = `${site.businessName} — ${site.tagline}`;
	const description = `${site.businessName} provides trusted plumbing and heating services across London.`;
	const images = [
		{
			url: "/images/og.jpg",
			width: 1200,
			height: 630,
			alt: site.businessName,
		},
	];
	return {
		metadataBase: new URL(SITE_URL),
		title,
		description,
		openGraph: {
			title,
			description,
			url: SITE_URL,
			images,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/images/og.jpg"],
		},
		robots: {
			index: true,
			follow: true,
		},
		alternates: {
			canonical: SITE_URL,
		},
		...overrides,
	};
}

export function jsonLd(type: string, data: Record<string, unknown>) {
	return {
		"@context": "https://schema.org",
		"@type": type,
		...data,
	};
} 