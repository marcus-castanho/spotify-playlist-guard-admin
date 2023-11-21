import { createMiddleware } from '@/infra/proxy';
import { API_URL } from './httpClient';
import httpProxy from 'http-proxy';

export function proxyMiddleware(req, res) {
    req.url = req.url.replace('/api/external', '');
    return new Promise((resolve, reject) => {
        const proxy: httpProxy = httpProxy.createProxy();
        proxy.once('proxyRes', resolve).once('error', reject).web(req, res, {
            changeOrigin: true,
            target: API_URL,
        });
    });
}
