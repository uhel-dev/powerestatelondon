import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialCard({ t }: { t: { name: string; title: string; quote: string } }) {
	return (
		<Card className="h-full">
			<CardContent className="p-6">
				<p className="mt-6 text-neutral-700">“{t.quote}”</p>
				<div className="mt-4 text-sm">
					<div className="font-medium">{t.name}</div>
					<div className="text-neutral-500">{t.title}</div>
				</div>
			</CardContent>
		</Card>
	);
} 