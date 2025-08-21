import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Section({ title, lead, children, className }: { title?: string; lead?: string; children: React.ReactNode; className?: string }) {
	return (
		<section className={cn("py-8 sm:py-12 md:py-16", className)}>
			<Container>
				{title && (
					<Reveal>
						<div className="mb-6 md:mb-8">
							<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
							{lead && <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">{lead}</p>}
						</div>
					</Reveal>
				)}
				{children}
			</Container>
		</section>
	);
} 