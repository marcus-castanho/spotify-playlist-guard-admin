import {
    parseCookies,
    setCookie as defineCookie,
    destroyCookie,
} from 'nookies';
import { CookieKey } from '.';

/**
 * Get a cookie with a particular name from inside of a client component. This function can not be used on the server side of the app.
 *
 * @param key Cookie key.
 */
export function getCookie(key: CookieKey) {
    const { [key]: cookieValue } = parseCookies();
    return cookieValue;
}

/**
 * Get cookies from inside of a client component. This can not be used on the server side of the app.
 */
export function getCookies() {
    return parseCookies();
}

/**
 * Set a cookie with a particular name from inside of a client component. This function can not be used on the server side of the app.
 *
 * @param key Cookie key.
 * @param value Cookie value.
 * @param options Options that are passed down to `cookie` library.
 */
export function setCookie(
    key: CookieKey,
    value: string,
    options: Parameters<typeof defineCookie>[3],
) {
    defineCookie(undefined, key, value, options);
}

/**
 * Delete a cookie with a particular name from inside of a client component. This function can not be used on the server side of the app.
 *
 * @param key Cookie key.
 */
export function deleteCookie(key: CookieKey) {
    destroyCookie(undefined, key);
}
