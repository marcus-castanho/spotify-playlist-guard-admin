import { z } from 'zod';
import { Fetch } from '..';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';

export type ExternalApp = z.infer<typeof externalAppsSchema>['items'][number];

const externalAppsSchema = z.object({
    pages: z.number(),
    items: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            recoverEmail: z.string(),
            baseUrl: z.string(),
            createdAt: z.string().datetime(),
            updatedAt: z.string().datetime(),
        }),
    ),
});

function validateExternalAppSchema(payload: unknown) {
    const validation = externalAppsSchema.safeParse(payload);
    const { success } = validation;

    if (!success)
        throw new InvalidResponseDataError(
            JSON.stringify(validation.error.issues),
        );

    return validation.data;
}

type GetExternalAppsPayload = {
    page: number;
    authToken: string;
};

export const getExternalApps: Fetch<
    { pages: number; items: ExternalApp[] },
    GetExternalAppsPayload
> = async (payload: { page: number; authToken: string }, fetchType) => {
    const { page, authToken } = payload;
    const response = await request({
        path: `/external-apps/list/${page}`,
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
