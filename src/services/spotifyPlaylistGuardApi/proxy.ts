import { createMiddleware } from '@/infra/proxy';
import { API_URL } from './httpClient';

export const proxyMiddleware = createMiddleware({
    target: API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api/external': '/',
    },
});
