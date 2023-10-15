'use client';

import React, { ReactNode, createContext, useContext } from 'react';
import { User } from '@/services/spotifyPlaylistGuardApi';
import { useRouter } from 'next/navigation';
import { deleteCookie } from '@/storage/cookies/client';
import { useUserMe } from './hooks/useUserMe';
import { TOKEN_COOKIE_KEY } from '.';

export type AuthContextType = {
    user: User | null;
    refetchUser: () => void;
    isAuthenticated: boolean;
    signOut: (sessionEnd?: boolean) => void;
};

export type AuthProviderProps = {
    children?: ReactNode;
    defaultUser?: User;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children, defaultUser }: AuthProviderProps) {
    const router = useRouter();
    const { me: user, refetch, query } = useUserMe({ signOut, defaultUser });
    const isAuthenticated = !!user;

    function signOut(sessionEnd?: boolean) {
        deleteCookie(TOKEN_COOKIE_KEY);
        query.remove();

        if (sessionEnd) return router.push(`/signin/?sessionEnd=${true}`);

        router.push('/signin');
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                refetchUser: () => refetch(),
                isAuthenticated,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) throw new Error('AuthContext was not provided');

    return context;
}
