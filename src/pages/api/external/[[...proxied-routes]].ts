/**
 * Spotify Playlist Guard API is hosted on another domain so it can't set cookies for browser app via Set-Cookie header. For now, proxy all of the Spotify Playlist Guard API routes to this BFF /api/exteral routes
 */

import { proxyMiddleware } from '@/services/spotifyPlaylistGuardApi/proxy';

export default function handler(req, res) {
    proxyMiddleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
            throw result;
        }
    });
}

export const config = {
    api: {
        externalResolver: true,
        // https://github.com/chimurai/http-proxy-middleware/issues/795#issuecomment-1314464432
        bodyParser: false,
    },
};
