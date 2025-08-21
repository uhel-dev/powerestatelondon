import Image from "next/image";
import Section from "@/components/Section";

const placeholders = Array.from({ length: 12 }, (_, i) => `/images/gallery/${i + 1}.jpeg`);

export default function GalleryPage() {
	return (
		<Section title="Gallery" lead="A look at recent projects and installations.">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
				{placeholders.map((src) => (
					<div key={src} className="relative aspect-square w-full overflow-hidden rounded-lg">
						<Image src={src} alt="Project photo" fill sizes="25vw" className="object-cover" />
					</div>
				))}
			</div>
		</Section>
	);
} 