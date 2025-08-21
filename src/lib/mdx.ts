import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";

export type BlogFrontmatter = {
	title: string;
	description?: string;
	date: string;
	tags?: string[];
};

export type BlogPost = {
	slug: string;
	frontmatter: BlogFrontmatter;
	html: string;
	readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getAllPosts(): Array<Omit<BlogPost, "html">> {
	if (!fs.existsSync(BLOG_DIR)) return [];
	const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
	return files
		.map((file) => {
			const slug = file.replace(/\.(mdx|md)$/i, "");
			const fullPath = path.join(BLOG_DIR, file);
			const raw = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(raw);
			const fm = data as BlogFrontmatter;
			const stats = readingTime(content);
			return {
				slug,
				frontmatter: fm,
				readingMinutes: Math.max(1, Math.round(stats.minutes)),
			};
		})
		.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
	const mdPath = path.join(BLOG_DIR, `${slug}.md`);
	const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
	if (!fullPath) return null;
	const raw = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(raw);
	const processed = await remark().use(html).process(content);
	const htmlContent = processed.toString();
	const stats = readingTime(content);
	return {
		slug,
		frontmatter: data as BlogFrontmatter,
		html: htmlContent,
		readingMinutes: Math.max(1, Math.round(stats.minutes)),
	};
} 