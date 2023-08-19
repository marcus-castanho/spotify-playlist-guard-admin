import {
    BaseError,
    InvalidResponseDataError,
    NotFoundError,
    UnauthorizedError,
} from '.';
import { deleteResponseCookie } from '../storage/cookies/server';
import { log } from '../logger';
import { NextRequest, NextResponse } from 'next/server';

export function handleServerErrorResponse(
    error,
    req: NextRequest,
    res: NextResponse,
): NextResponse {
    if (!(error instanceof BaseError)) {
        log({
            message: 'Uncaught error',
            payload: {
                message: error.message,
                stack: error.stack,
            },
        });

        return NextResponse.redirect(new URL('/500', req.url));
    }

    const { name, message, stack } = error;
    log({
        message: name,
        payload: { message, stack },
    });

    const { originalError } = error;
    if (originalError) {
        log({
            message: 'Original error',
            payload: {
                message: originalError.message,
                stack: originalError.stack,
                error,
            },
        });
    }

    if (error instanceof InvalidResponseDataError) {
        return NextResponse.redirect(new URL('/500', req.url));
    }

    if (error instanceof UnauthorizedError) {
        const { sessionEnd } = error;
        deleteResponseCookie('s-p-guard-admin:token', res);

        const signInPath = sessionEnd
            ? new URL(`/signin/?sessionEnd=${sessionEnd}`, req.url)
            : new URL('/signin', req.url);

        return NextResponse.redirect(signInPath);
    }

    if (error instanceof NotFoundError) {
        return NextResponse.redirect(new URL('/400', req.url));
    }

    return NextResponse.redirect(new URL('/500', req.url));
}
