import { User, Fetch } from '..';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';
import { z } from 'zod';

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

type PatchUserPayload = {
    id: string;
    name: string;
    email: string;
    authToken: string;
};

export const patchUser: Fetch<User, PatchUserPayload> = async (
    payload,
    fetchType,
) => {
    const { authToken, id, ...reqPayload } = payload;

    const response = await request({
        path: `/admin-users/update/${id}`,
        options: {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqPayload),
        },
        authToken,
        fetchType,
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 200) return { success: false, status, data: null };

    const data = validateUserSchema(resBody);

    return {
        success: true,
        status,
        data,
    };
};
