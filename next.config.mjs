/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dfwassets.s3.eu-west-2.amazonaws.com',
				pathname: '/**',
			},
		],
	},
	// Fix for Next.js 15 Vercel compatibility
	output: 'standalone',
};

export default nextConfig;
