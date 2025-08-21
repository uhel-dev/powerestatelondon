import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceCard({ service }: { service: { slug: string; name: string; short: string; image: string } }) {
	return (
		<Link href={`/services/${service.slug}`} className="block">
			<Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
				<div className="relative h-40 w-full">
					<Image src={service.image} alt={service.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
				</div>
				<CardHeader>
					<CardTitle>{service.name}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-neutral-600">{service.short}</p>
				</CardContent>
			</Card>
		</Link>
	);
} 