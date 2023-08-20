import { NextResponse, NextRequest } from 'next/server';
import { handleMiddlewareErrorResponse } from './errors/serverErrorHandlers';
import { validateSession } from './middlewares/validateSession';

/**
 * middleware runs only on private routes
 */
export const config = {
    matcher: ['/home/:path*', '/profile/:path*'],
};

export async function middleware(request: NextRequest) {
    try {
        validateSession(request);
        return NextResponse.next();
    } catch (error) {
        const response = NextResponse.next();
        return handleMiddlewareErrorResponse(error, request, response);
    }
}
