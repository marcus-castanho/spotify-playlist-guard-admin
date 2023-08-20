import {
    HTTPException,
    InvalidResponseDataError,
    NotFoundError,
    UnauthorizedError,
    InternalServerError,
} from '.';
import { deleteResponseCookie } from '../storage/cookies/server';
import { log } from '../logger';
import { NextRequest, NextResponse } from 'next/server';

type SendResponseProps =
    | {
          origin: 'api';
          payload: {
              status: number;
              message: string;
          };
      }
    | {
          origin: 'middleware';
          redirectUrl: URL;
      };

function sendResponse(responseConfig: SendResponseProps) {
    const { origin } = responseConfig;
    return origin === 'api'
        ? NextResponse.json(responseConfig.payload, {
              status: responseConfig.payload.status,
          })
        : NextResponse.redirect(responseConfig.redirectUrl);
}

export function handleServerErrorResponse(
    error,
    req: NextRequest,
    res: NextResponse,
    origin: 'middleware' | 'api' = 'api',
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

        return origin === 'api'
            ? sendResponse({
                  origin,
                  payload: {
                      status: 500,
                      message: 'Internal Server Error',
                  },
              })
            : sendResponse({
                  origin,
                  redirectUrl: new URL('/500', req.url),
              });
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

    if (error instanceof InvalidResponseDataError) {
        return origin === 'api'
            ? sendResponse({
                  origin,
                  payload: {
                      status: statusCode,
                      message: 'Internal Server Error',
                  },
              })
            : sendResponse({
                  origin,
                  redirectUrl: new URL('/500', req.url),
              });
    }

    if (error instanceof UnauthorizedError) {
        const { sessionEnd } = error;
        deleteResponseCookie('s-p-guard-admin:token', res);

        const signInPath = sessionEnd
            ? new URL(`/signin/?sessionEnd=${sessionEnd}`, req.url)
            : new URL('/signin', req.url);

        return origin === 'api'
            ? sendResponse({
                  origin,
                  payload: {
                      status: statusCode,
                      message,
                  },
              })
            : sendResponse({
                  origin,
                  redirectUrl: signInPath,
              });
    }

    if (error instanceof NotFoundError) {
        return origin === 'api'
            ? sendResponse({
                  origin,
                  payload: {
                      status: statusCode,
                      message,
                  },
              })
            : sendResponse({
                  origin,
                  redirectUrl: new URL('/404', req.url),
              });
    }

    return origin === 'api'
        ? sendResponse({
              origin,
              payload: {
                  status: statusCode,
                  message,
              },
          })
        : sendResponse({
              origin,
              redirectUrl: new URL('/500', req.url),
          });
}
