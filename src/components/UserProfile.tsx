'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

export const UserProfile = () => {
    const { user } = useAuth();

    return (
        <>
            <div>
                {user &&
                    Object.keys(user).map((key) => {
                        return (
                            <div key={key}>{`${key}: ${
                                user[key as keyof typeof user]
                            }`}</div>
                        );
                    })}
            </div>
        </>
    );
};
