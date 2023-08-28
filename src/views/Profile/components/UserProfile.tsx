'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ProfileForm } from './ProfileForm';

export const UserProfile = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);

    if (!user) return <>loading</>;
    return (
        <>
            <div>
                {user && (
                    <>
                        <div>{`createdAt: ${user.createdAt}`}</div>
                        <div>{`updatedAt: ${user.updatedAt}`}</div>
                        <div>{`roles: ${user.roles}`}</div>
                        <div>{`id: ${user.id}`}</div>
                        {isEditing ? (
                            <ProfileForm
                                id={user.id}
                                defaultForm={{
                                    name: user.name,
                                    email: user.email,
                                }}
                                onSubmit={() => setIsEditing(false)}
                            />
                        ) : (
                            <>
                                <div>{`name: ${user.name}`}</div>
                                <div>{`email: ${user.email}`}</div>
                                <button
                                    onClick={() =>
                                        setIsEditing((state) => !state)
                                    }
                                >
                                    edit
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
