import Breadcrumbs from "@/components/Breadcrumbs";
import Prose from "@/components/Prose";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import type { Metadata } from "next";
import { baseMetadata, jsonLd } from "@/lib/seo";

export async function generateStaticParams() {
	return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) return baseMetadata({ title: "Blog" });
	return baseMetadata({ title: `${post.frontmatter.title}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) return null;
	const blogLd = jsonLd("BlogPosting", {
		headline: post.frontmatter.title,
		datePublished: post.frontmatter.date,
	});
	const breadcrumbLd = jsonLd("BreadcrumbList", {
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Blog", item: "/blog" },
			{ "@type": "ListItem", position: 2, name: post.frontmatter.title, item: `/blog/${post.slug}` },
		],
	});
	return (
		<section className="py-12 md:py-16">
			<div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
				<Breadcrumbs items={[{ href: "/blog", label: "Blog" }, { label: post.frontmatter.title }]} />
				<h1 className="mt-4 text-3xl font-semibold">{post.frontmatter.title}</h1>
				<div className="mt-1 text-sm text-neutral-600">{new Date(post.frontmatter.date).toLocaleDateString()} · {post.readingMinutes} min read</div>
				<Prose>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</Prose>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
			</div>
		</section>
	);
} 