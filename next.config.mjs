/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;
