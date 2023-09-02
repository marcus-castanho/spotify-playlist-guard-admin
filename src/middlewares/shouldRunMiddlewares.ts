import { NextRequest } from 'next/server';

export function shouldRunMiddlewares(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (
        pathname.startsWith('/_') || // Default undefined page to redirect when NotFound is thrown in middleware
        pathname.startsWith('/500') // Custom 500 - Internal server error page (pages directory)
    )
        return false;

    return true;
}
