import { SpotifyPlaylistGuardApiReturn } from '../.';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';
import { z } from 'zod';

const authSchema = z.object({
    token: z.string(),
});

function validateAuthSchema(payload: unknown) {
    const validation = authSchema.safeParse(payload);
    const { success } = validation;

    if (!success)
        throw new InvalidResponseDataError(
            JSON.stringify(validation.error.issues),
        );

    return validation.data;
}

export async function postAuth(credentials: {
    email: string;
    password: string;
}): Promise<SpotifyPlaylistGuardApiReturn<string>> {
    const response = await request({
        path: `/auth/login/admin`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        },
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 200) return { success: false, status, data: null };

    const { token } = validateAuthSchema(resBody);

    return {
        success: true,
        status,
        data: token,
    };
}
