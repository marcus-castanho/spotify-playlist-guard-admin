import { z } from 'zod';
import { SpotifyPlaylistGuardApiReturn } from '../.';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';

export type User = z.infer<typeof userSchema>;

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    roles: z.array(z.string()),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

function validateUserSchema(payload: unknown) {
    const validation = userSchema.safeParse(payload);
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
}): Promise<SpotifyPlaylistGuardApiReturn<{ token: string; userData: User }>> {
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
    const token = response.headers.get('Authorization')?.split(' ')[1];

    if (status !== 200) return { success: false, status, data: null };
    if (!token) throw new InvalidResponseDataError('Invalid token received');

    const user = validateUserSchema(resBody);

    return {
        success: true,
        status,
        data: { token, userData: user },
    };
}
