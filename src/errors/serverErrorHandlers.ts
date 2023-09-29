import {
    HTTPException,
    InvalidResponseDataError,
    NotFound,
    Unauthorized,
    InternalServerError,
} from '.';
import { deleteResponseCookie } from '@/storage/cookies/server';
import { log } from '@/logger';
import { NextRequest, NextResponse } from 'next/server';
import { TOKEN_COOKIE_KEY } from '@/contexts/AuthContext';

export function handleApiErrorResponse(error) {
    if (
        error instanceof InternalServerError ||
        !(error instanceof HTTPException)
    ) {
        log({
            message: 'Internal Server Error',
            payload: {
                message: error.message,
                stack: error.stack,
            },
        });

        return NextResponse.json(
            { status: 500, message: 'Internal Server Error' },
            { status: 500 },
        );
    }

    const { name, message, stack, statusCode, originalError } = error;
    log({
        message: name,
        payload: { message, stack },
    });

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

    return NextResponse.json(
        { status: statusCode, message: 'Internal Server Error' },
        { status: statusCode },
    );
}

export function handleMiddlewareErrorResponse(
    error,
    req: NextRequest,
    res: NextResponse,
) {
    if (
        error instanceof InternalServerError ||
        !(error instanceof HTTPException)
    ) {
        log({
            message: 'Internal Server Error',
            payload: {
                message: error.message,
                stack: error.stack,
            },
        });

        return NextResponse.redirect(new URL('/500', req.url));
    }

    const { name, message, stack, originalError } = error;
    log({
        message: name,
        payload: { message, stack },
    });

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

    if (error instanceof Unauthorized) {
        const { sessionEnd } = error;
        deleteResponseCookie(TOKEN_COOKIE_KEY, res);

        const signInPath = sessionEnd
            ? new URL(`/signin/?sessionEnd=${sessionEnd}`, req.url)
            : new URL('/signin', req.url);

        return NextResponse.redirect(signInPath);
    }

    if (error instanceof NotFound) {
        // Default undefined page to redirect when NotFound is thrown in middleware
        return NextResponse.redirect(new URL('/_', req.url));
    }

    return NextResponse.redirect(new URL('/500', req.url));
}
