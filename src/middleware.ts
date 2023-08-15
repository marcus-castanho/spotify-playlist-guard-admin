import { NextResponse, NextRequest } from 'next/server';
import { sessionIsActive } from './useCases/auth';

export function middleware(request: NextRequest) {
    if (!sessionIsActive(request))
        return NextResponse.redirect(new URL('/signin', request.url));

    return NextResponse.next();
}

export const config = {
    matcher: ['/home', '/profile'],
};
