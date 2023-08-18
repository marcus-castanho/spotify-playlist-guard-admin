export function request({
    path,
    authToken,
    options,
    fetchType = {
        type: 'SSG',
    },
}: {
    path: string;
    authToken?: string;
    options?: RequestInit;
    fetchType?: {
        type: 'SSR' | 'SSG';
        revalidate?: number;
    };
}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const headers = options?.headers;
    const { type, revalidate } = fetchType;
    const fetchTypeOptions = {
        ...(type === 'SSR' ? { cache: 'no-store' } : {}),
        ...(type === 'SSG' && revalidate
            ? {
                  next: {
                      revalidate,
                  },
              }
            : {}),
    };

    if (!authToken) {
        return fetch(`${apiUrl}${path}`, {
            ...options,
            ...{ fetchTypeOptions },
        });
    }

    return fetch(`${apiUrl}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${authToken}`,
            ...headers,
        },
    });
}
