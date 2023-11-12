import { z } from 'zod';
import { ExternalApp, Fetch } from '..';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';

const externalAppSchema = z.object({
    id: z.string(),
    name: z.string(),
    recoverEmail: z.string(),
    baseUrl: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

function validateExternalAppSchema(payload: unknown) {
    const validation = externalAppSchema.safeParse(payload);
    const { success } = validation;

    if (!success)
        throw new InvalidResponseDataError(
            JSON.stringify(validation.error.issues),
        );

    return validation.data;
}

type GetExternalAppPayload = {
    id: string;
    authToken: string;
};

export const getExternalApp: Fetch<ExternalApp, GetExternalAppPayload> = async (
    payload: { id: string; authToken: string },
    fetchType = { type: 'SSG' },
) => {
    const { id, authToken } = payload;
    const response = await request({
        path: `/external-apps/find/${id}`,
        options: { method: 'GET' },
        authToken,
        fetchType,
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 200) return { success: false, status, data: null };

    const data = validateExternalAppSchema(resBody);

    return {
        success: true,
        status,
        data,
    };
};
