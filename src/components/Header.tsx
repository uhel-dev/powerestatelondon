"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { site } from "../../site.config";
import { telHref } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/reviews", label: "Reviews" },
	{ href: "/gallery", label: "Gallery" },
	// { href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
			<Container className="flex h-16 items-center gap-4">
				{/* Logo - Left side */}
				<Link href="/" className="flex items-center gap-3 font-semibold text-lg flex-shrink-0" onClick={closeMenu}>
					{site.logo?.src ? (
						<span className="relative h-8 w-36">
							<Image src={site.logo.src} alt={site.businessName} fill sizes="140px" className="object-contain" />
						</span>
					) : (
						site.businessName
					)}
				</Link>

				{/* Desktop Navigation - Center */}
				<nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
					{nav.map((item) => (
						<Link key={item.href} href={item.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
							{item.label}
						</Link>
					))}
				</nav>

				{/* Desktop Call Button - Right side */}
				<div className="hidden md:block ml-auto">
					<a
						className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 transition-colors"
						href={telHref(site.phones.primary)}
						aria-label="Call now"
					>
						Call Now
					</a>
				</div>

				{/* Mobile Buttons - Right side */}
				<div className="md:hidden flex items-center gap-3 ml-auto">
					{/* Mobile Call Button */}
					<a
						className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 transition-colors"
						href={telHref(site.phones.primary)}
						aria-label="Call now"
					>
						<Phone className="w-5 h-5" />
					</a>

					{/* Mobile Menu Button */}
					<button
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 transition-colors"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>
			</Container>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="lg:hidden border-t border-neutral-200 bg-white">
					<Container>
						<nav className="py-4 space-y-2">
							{nav.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="block py-3 px-4 text-base text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors"
									onClick={closeMenu}
								>
									{item.label}
								</Link>
							))}
						</nav>
						<div className="py-4 border-t border-neutral-200">
							<a
								className="inline-flex h-12 w-full items-center justify-center rounded-md bg-green-600 px-6 text-base font-medium text-white hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 transition-colors"
								href={telHref(site.phones.primary)}
								onClick={closeMenu}
							>
								<Phone className="w-5 h-5 mr-2" />
								Call Now: {site.phones.primary}
							</a>
						</div>
					</Container>
				</div>
			)}
		</header>
	);
} 