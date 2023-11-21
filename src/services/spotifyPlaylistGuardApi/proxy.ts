import { proxyServer } from '@/infra/proxy';
import { API_URL } from './httpClient';

export function proxyMiddleware(req, res) {
    req.url = req.url.replace('/api/external', '');

    return new Promise((resolve, reject) => {
        proxyServer
            .once('proxyRes', resolve)
            .once('error', reject)
            .web(req, res, {
                changeOrigin: true,
                target: API_URL,
            });
    });
}
