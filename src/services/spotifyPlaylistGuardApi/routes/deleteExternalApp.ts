import { Fetch } from '..';
import { request } from '../httpClient';

type DeleteExternalAppPayload = {
    id: string;
    authToken: string;
};

export const deleteExternalApp: Fetch<null, DeleteExternalAppPayload> = async (
    payload: { id: string; authToken: string },
    fetchType,
) => {
    const { id, authToken } = payload;
    const response = await request({
        path: `/external-apps/delete/${id}`,
        options: { method: 'DELETE' },
        authToken,
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
