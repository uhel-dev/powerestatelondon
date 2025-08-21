import Container from "@/components/Container";
import Link from "next/link";
import { site } from "../../site.config";

export default function Footer() {
	return (
		<footer className="border-t border-neutral-200 bg-neutral-50">
			<Container className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 text-sm">
				<div>
					<h3 className="font-semibold mb-3">{site.businessName}</h3>
					<p className="text-neutral-600">{site.tagline}</p>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Services</h4>
					<ul className="space-y-2">
						{site.services.map((s) => (
							<li key={s.slug}>
								<Link href={`/services/${s.slug}`} className="text-neutral-700 hover:text-neutral-900">
									{s.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Quick Links</h4>
					<ul className="space-y-2">
						<li><Link href="/about" className="text-neutral-700 hover:text-neutral-900">About</Link></li>
						<li><Link href="/privacy" className="text-neutral-700 hover:text-neutral-900">Privacy Policy</Link></li>
						<li><Link href="/contact" className="text-neutral-700 hover:text-neutral-900">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-3">Contact</h4>
					<p className="text-neutral-700">{site.address}</p>
					<p className="text-neutral-700 break-all">{site.email}</p>
					<p className="text-neutral-700">{site.phones.primary}</p>
					<p className="text-neutral-700">{site.hours}</p>
				</div>
			</Container>
			<div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-600">© {new Date().getFullYear()} {site.legal.company} · {site.legal.companyNo}</div>
		</footer>
	);
} 