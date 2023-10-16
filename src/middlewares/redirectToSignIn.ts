import { NextRequest, NextResponse } from 'next/server';

export const redirectToSignIn = (req: NextRequest) => {
    const signInPath = new URL('/signin', req.url);
    return NextResponse.redirect(signInPath);
};
