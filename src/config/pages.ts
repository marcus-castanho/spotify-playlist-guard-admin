export const publicPages = ['/', '/signin', '/404', '/500'] as const;
export type PublicPage = (typeof publicPages)[number];

export const isPrivatePage = (path: string) => {
    //@ts-ignore - includes show error since path is string and publicPages is tuple but the verification must be done nevertheless
    return !publicPages.includes(path);
};
