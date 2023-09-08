/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "m.media-amazon.com"
			},
			{
				protocol: "http",
				hostname: "books.google.com"
			},
			{
				protocol: "https",
				hostname: "storage.googleapis.com"
			}
		]
	}
}

module.exports = nextConfig
