import { createMiddleware } from '@/infra/proxy';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const proxyMiddleware = createMiddleware({
    target: API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/external': '/',
    },
});
