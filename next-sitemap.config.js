/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://powerestateslondon.com',
	generateRobotsTxt: true,
	outDir: 'public',
	changefreq: 'daily',
	priority: 0.7,
	exclude: ['/admin/*'],
	generateIndexSitemap: true,
}; 