import Link from "next/link";
import Section from "@/components/Section";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
	const posts = getAllPosts();
	return (
		<Section title="Blog" lead="Insights and tips to keep your home running smoothly.">
			{posts.length === 0 ? (
				<p className="text-neutral-600">No posts yet. Check back soon.</p>
			) : (
				<ul className="space-y-4">
					{posts.map((p) => (
						<li key={p.slug} className="rounded-xl border border-neutral-200 p-4">
							<Link href={`/blog/${p.slug}`} className="font-medium hover:underline">{p.frontmatter.title}</Link>
							<div className="text-sm text-neutral-600">{new Date(p.frontmatter.date).toLocaleDateString()} · {p.readingMinutes} min read</div>
						</li>
					))}
				</ul>
			)}
		</Section>
	);
} 