import { z } from 'zod';
import { SpotifyPlaylistGuardApiReturn } from '../.';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';
import { NextRequest } from 'next/server';

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

export async function postAuth(
    credentials: {
        email: string;
        password: string;
    },
    req?: NextRequest,
): Promise<SpotifyPlaylistGuardApiReturn<User>> {
    const response = await request({
        path: `/auth/login/admin`,
        authenticated: false,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        },
        req,
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 200) return { success: false, status, data: null };

    const user = validateUserSchema(resBody);

    return {
        success: true,
        status,
        data: user,
    };
}
