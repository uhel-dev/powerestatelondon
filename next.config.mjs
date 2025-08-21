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
};

export default nextConfig;
