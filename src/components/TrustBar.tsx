import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";

export default function TrustBar() {
	return (
		<section className="border-y border-neutral-200 bg-gradient-to-r from-neutral-50/80 to-neutral-100/80 py-6">
			<Container>
				<div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
					<Badge className="px-4 py-2 text-sm font-medium bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50">
						Local, family-run
					</Badge>
					<Badge className="px-4 py-2 text-sm font-medium bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50">
						Fully insured
					</Badge>
					<Badge className="px-4 py-2 text-sm font-medium bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50">
						Clear, upfront pricing
					</Badge>
					<Badge className="px-4 py-2 text-sm font-medium bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50">
						Card payments accepted
					</Badge>
					<Badge className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white border-neutral-900">
						5★ rated by customers
					</Badge>
				</div>
			</Container>
		</section>
	);
} 