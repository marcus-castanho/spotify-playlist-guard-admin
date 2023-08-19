import { NextResponse, NextRequest } from 'next/server';
import { handleServerErrorResponse } from './errors/handleServerErrorResponse';
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
        return handleServerErrorResponse(error, request, response);
    }
}
