/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "dummyimage.com"
            }
        ]
    }
}

module.exports = nextConfig
