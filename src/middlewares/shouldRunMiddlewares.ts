import { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function shouldRunMiddlewares(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (
        pathname.startsWith('/_next') || // Next.js internals
        pathname.startsWith('/api') || // API routes
        pathname.startsWith('/static') || // static files
        PUBLIC_FILE.test(pathname) // all files in the public folder
    )
        return false;

    return true;
}
