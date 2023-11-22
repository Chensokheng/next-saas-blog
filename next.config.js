/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "source.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

module.exports = nextConfig;
