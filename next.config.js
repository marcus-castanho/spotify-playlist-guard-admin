/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/docs',
                destination: '/docs/index.html',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
