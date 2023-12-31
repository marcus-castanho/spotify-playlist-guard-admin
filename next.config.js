/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            /**
             * Use redirection to access storybook documentation via /docs route
             */
            {
                source: '/docs',
                destination: '/docs/index.html',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            /**
             * Spotify Playlist Guard API is hosted on another domain so it can't set cookies for browser app via Set-Cookie header. For now, proxy all of the Spotify Playlist Guard API routes to this app's BFF /api/exteral routes
             */
            {
                source: '/api/external/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;
