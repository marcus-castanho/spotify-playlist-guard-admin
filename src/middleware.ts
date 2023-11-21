import { NextResponse, NextRequest } from 'next/server';
import { handleMiddlewareErrorResponse } from './errors/serverErrorHandlers';
import { validateSession } from './middlewares/validateSession';
import { isPrivatePage } from './config/pages';
import { shouldRunMiddlewares } from './middlewares/shouldRunMiddlewares';
import { redirectToPath } from './middlewares/redirectToPath';
import { getRequestCookie } from './storage/cookies/server';
import { TOKEN_COOKIE_KEY } from './contexts/AuthContext';

export const config = {
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
    try {
        const { pathname } = request.nextUrl;
        const isAuthenticated = !!getRequestCookie(TOKEN_COOKIE_KEY, request);

        if (!shouldRunMiddlewares(request)) return NextResponse.next();
        if (pathname === '/') return redirectToPath(request, '/signin');
        if (isPrivatePage(pathname)) validateSession(request);
        if (isAuthenticated && pathname === '/signin')
            return redirectToPath(request, '/home');

        return NextResponse.next();
    } catch (error) {
        const response = NextResponse.next();
        return handleMiddlewareErrorResponse(error, request, response);
    }
}
