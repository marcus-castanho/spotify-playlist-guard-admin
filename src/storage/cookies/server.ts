import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { CookieKey } from '.';

/**
 * Get a cookie with a particular name on the server side of the app. This function can be used in:
 * - Server components
 *
 * @param key Cookie key.
 */
export function getPageCookie(key: CookieKey) {
    const cookieStore = cookies();
    return cookieStore.get(key);
}

/**
 * Get cookies on the server side of the app. This function can be used in:
 * - Server components
 */
export function getPageCookies() {
    const cookieStore = cookies();
    const cookiesArray = cookieStore.getAll();

    return cookiesArray.reduce(
        (cookiesObj, { name, value }) =>
            Object.assign(cookiesObj, { [name]: value }),
        {} as {
            [key: string]: string;
        },
    );
}

/**
 * Get a cookie with a particular name on the server side of the app. This function can be used with a Request instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param key Cookie key.
 * @param req Request instance.
 */
export function getRequestCookie(key: CookieKey, req: NextRequest) {
    return req.cookies.get(key);
}

/**
 * Get cookies on the server side of the app. This function can be used with a Request instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param req Request instance.
 */
export function getRequestCookies(req: NextRequest) {
    const cookiesArray = req.cookies.getAll();

    return cookiesArray.reduce(
        (cookiesObj, { name, value }) =>
            Object.assign(cookiesObj, { [name]: value }),
        {} as {
            [key: string]: string;
        },
    );
}

/**
 * Get a cookie with a particular name on the server side of the app. This function can be used with a Response instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param key Cookie key.
 * @param res Response instance.
 */
export function getResponseCookie(key: CookieKey, res: NextResponse) {
    return res.cookies.get(key);
}

/**
 * Get cookies on the server side of the app. This function can be used with a Response instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param res Response instance.
 */
export function getResponseCookies(res: NextResponse) {
    const cookiesArray = res.cookies.getAll();

    return cookiesArray.reduce(
        (cookiesObj, { name, value }) =>
            Object.assign(cookiesObj, { [name]: value }),
        {} as {
            [key: string]: string;
        },
    );
}

/**
 * Set a cookie with a particular name on the server side of the app. This function can be used with a Request instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param key Cookie key.
 * @param value Cookie value.
 * @param req Request instance.
 */
export function setRequestCookie(
    key: CookieKey,
    value: string,
    req: NextRequest,
) {
    req.cookies.set({ name: key, value });
}

/**
 * Set a cookie with a particular name on the server side of the app. This function can be used with a Response instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param key Cookie key.
 * @param value Cookie value.
 * @param res Response instance.
 * @param options Options that are passed down to `cookie` library.
 */
export function setResponseCookie(
    key: CookieKey,
    value: string,
    res: NextResponse,
    options?: Omit<
        Exclude<Parameters<NextResponse['cookies']['set']>[0], string>,
        'name' | 'value'
    >,
) {
    res.cookies.set({ name: key, value, ...options });
}

/**
 * Delete cookies with particular names on the server side of the app. This function can be used with a Request instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param keys Cookies keys.
 * @param req Request instance.
 */
export function deleteRequestCookies(
    cookieKeys: CookieKey[],
    req: NextRequest,
) {
    req.cookies.delete(cookieKeys);
}

/**
 * Delete a cookie with a particular name on the server side of the app. This function can be used with a Response instance in:
 * - Next middleware
 * - Next route handlers
 *
 * @param key Cookie key.
 * @param res Response instance.
 */
export function deleteResponseCookie(cookieKey: CookieKey, res: NextResponse) {
    res.cookies.delete(cookieKey);
}
