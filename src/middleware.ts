import { NextResponse, NextRequest } from 'next/server';
import { handleMiddlewareErrorResponse } from './errors/serverErrorHandlers';
import { validateSession } from './middlewares/validateSession';
import { isPrivatePage } from './config/pages';

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
        if (isPrivatePage(request.nextUrl.pathname)) validateSession(request);

        return NextResponse.next();
    } catch (error) {
        const response = NextResponse.next();
        return handleMiddlewareErrorResponse(error, request, response);
    }
}
