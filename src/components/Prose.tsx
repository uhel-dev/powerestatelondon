export default function Prose({ children }: { children: React.ReactNode }) {
	return (
		<div className="prose prose-neutral max-w-none">
			{children}
		</div>
	);
} 