import Link from "next/link";

export type Crumb = { href?: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
	return (
		<nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
			<ol className="flex items-center gap-2">
				{items.map((item, idx) => (
					<li key={`${item.label}-${idx}`} className="flex items-center gap-2">
						{item.href ? (
							<Link href={item.href} className="hover:text-neutral-900">
								{item.label}
							</Link>
						) : (
							<span aria-current="page">{item.label}</span>
						)}
						{idx < items.length - 1 && <span>/</span>}
					</li>
				))}
			</ol>
		</nav>
	);
} 