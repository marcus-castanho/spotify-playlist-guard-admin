import { z } from 'zod';
import { Fetch } from '..';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';

export type ExternalApp = z.infer<typeof externalAppSchema>[number];

const externalAppSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
        recoverEmail: z.string(),
        baseUrl: z.string(),
        createdAt: z.string().datetime(),
        updatedAt: z.string().datetime(),
    }),
);

function validateExternalAppSchema(payload: unknown) {
    const validation = externalAppSchema.safeParse(payload);
    const { success } = validation;

    if (!success)
        throw new InvalidResponseDataError(
            JSON.stringify(validation.error.issues),
        );

    return validation.data;
}

type GetMePayload = {
    page: number;
    authToken: string;
};

export const getExternalApps: Fetch<
    ExternalApp[],
    GetMePayload
> = async (payload: { page: number; authToken: string }) => {
    const { page, authToken } = payload;
    const response = await request({
        path: `/external-apps/list/${page}`,
        options: { method: 'GET' },
        authToken,
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 200) return { success: false, status, data: null };

    const user = validateExternalAppSchema(resBody);

    return {
        success: true,
        status,
        data: user,
    };
};
