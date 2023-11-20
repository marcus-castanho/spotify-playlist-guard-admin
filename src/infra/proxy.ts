import { createProxyMiddleware } from 'http-proxy-middleware';

export function createMiddleware(
    params: Parameters<typeof createProxyMiddleware>[0],
) {
    return createProxyMiddleware(params);
}
