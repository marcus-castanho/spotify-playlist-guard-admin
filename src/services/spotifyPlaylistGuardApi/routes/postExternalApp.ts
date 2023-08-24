import { Fetch } from '..';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';
import { z } from 'zod';

export type ExternalAppWithKey = z.infer<typeof externalAppWithKeySchema>;

const externalAppWithKeySchema = z.object({
    apiKey: z.string(),
    id: z.string(),
    name: z.string(),
    recoverEmail: z.string(),
    baseUrl: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

function validateExternalAppWithKeySchema(payload: unknown) {
    const validation = externalAppWithKeySchema.safeParse(payload);
    const { success } = validation;

    if (!success)
        throw new InvalidResponseDataError(
            JSON.stringify(validation.error.issues),
        );

    return validation.data;
}

type PostExternalApp = {
    name: string;
    recoverEmail: string;
    baseUrl: string;
    authToken: string;
};

export const postExternalApp: Fetch<
    ExternalAppWithKey,
    PostExternalApp
> = async (payload, fetchType = { type: 'SSG' }) => {
    const { authToken, ...reqPayload } = payload;

    const response = await request({
        path: `/external-apps/add`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqPayload),
        },
        authToken,
        fetchType,
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 201) return { success: false, status, data: null };

    const data = validateExternalAppWithKeySchema(resBody);

    return {
        success: true,
        status,
        data,
    };
};
