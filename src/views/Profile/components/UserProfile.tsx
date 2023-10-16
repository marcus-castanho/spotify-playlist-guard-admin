'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ProfileForm } from './ProfileForm';
import { ProfileVisualizer } from './ProfileVisualizer';
import { Avatar } from '@/components/Avatar';

export const UserProfile = () => {
    const { user, refetchUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);

    const onSubmit = () => {
        setIsEditing(false);
        refetchUser();
    };

    if (!user) return <>loading</>;
    return (
        <div className="p-3. top-1/2 max-w-xs">
            <div className="flex justify-center p-4">
                <Avatar size={52} />
            </div>
            {user && (
                <>
                    {isEditing ? (
                        <ProfileForm
                            id={user.id}
                            defaultForm={{
                                name: user.name,
                                email: user.email,
                            }}
                            onSubmit={onSubmit}
                            onCancel={() => setIsEditing(false)}
                        />
                    ) : (
                        <ProfileVisualizer
                            defaultForm={{
                                name: user.name,
                                email: user.email,
                            }}
                            onEdit={() => setIsEditing((state) => !state)}
                        />
                    )}
                </>
            )}
        </div>
    );
};
