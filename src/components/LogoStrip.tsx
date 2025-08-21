import Image from "next/image";
import Container from "@/components/Container";
import { site } from "../../site.config";

export default function LogoStrip() {
	return (
		<section className="py-8">
			<Container>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-80">
					{site.partnerLogos.map((src) => (
						<div key={src} className="relative h-32 w-full">
							<Image src={src} alt="Partner logo" fill sizes="20vw" className="object-contain" />
						</div>
					))}
				</div>
			</Container>
		</section>
	);
} 