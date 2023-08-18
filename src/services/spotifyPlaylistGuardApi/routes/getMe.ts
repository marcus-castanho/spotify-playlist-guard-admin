import { z } from 'zod';
import { Fetch } from '..';
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

type GetMePayload = string;

export const getMe: Fetch<User, GetMePayload> = async (authToken) => {
    const response = await request({
        path: `/admin-users/me`,
        options: { method: 'GET' },
        authToken,
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
};
