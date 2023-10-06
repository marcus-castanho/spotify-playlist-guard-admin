import { Fetch } from '../.';
import { request } from '../httpClient';

type PostAuthPayload = {
    email: string;
    password: string;
};

export const postAuth: Fetch<null, PostAuthPayload> = async (
    payload,
    fetchType = { type: 'SSG' },
) => {
    const response = await request({
        path: `/auth/login/admin`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            credentials: 'include',
        },
        fetchType,
    });
    const { status } = response;

    if (status !== 204) return { success: false, status, data: null };

    return {
        success: true,
        status,
        data: null,
    };
};
