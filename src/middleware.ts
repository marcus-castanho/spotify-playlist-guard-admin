import { NextResponse, NextRequest } from 'next/server';
import { handleMiddlewareErrorResponse } from './errors/serverErrorHandlers';
import { validateSession } from './middlewares/validateSession';
import { isPrivatePage } from './config/pages';
import { shouldRunMiddlewares } from './middlewares/shouldRunMiddlewares';

export async function middleware(request: NextRequest) {
    try {
        if (!shouldRunMiddlewares(request)) return NextResponse.next();
        if (isPrivatePage(request.nextUrl.pathname)) validateSession(request);

        return NextResponse.next();
    } catch (error) {
        const response = NextResponse.next();
        return handleMiddlewareErrorResponse(error, request, response);
    }
}
