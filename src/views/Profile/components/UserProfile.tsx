'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { patchUser } from '@/services/spotifyPlaylistGuardApi/routes/patchUser';
import { getCookie } from '@/storage/cookies/client';
import {
    handleUncaughtClientError,
    useClientErrorHandler,
} from '@/errors/clientErrorHandlers';
import { useToast } from '@/contexts/ToastContext';

export const UserProfile = () => {
    const token = getCookie('s-p-guard-admin:token') || '';
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [isSubmiting, setIsSubmitting] = useState(false);
    const { handleGuardApiResponse } = useClientErrorHandler();
    const { toast } = useToast();
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    const handleSaveUserInfo = async (id: string) => {
        setIsSubmitting(true);

        await patchUser({
            id,
            ...form,
            authToken: token,
        })
            .then(handleGuardApiResponse)
            .then(() => toast('Successfully updated.', 'success'))
            .then(() => setIsEditing(false))
            .catch((error) => {
                handleUncaughtClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    useEffect(() => {
        if (!user) return;
        setForm({
            name: user.name,
            email: user.email,
        });
    }, [user]);

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
                            <>
                                <div>
                                    name:{' '}
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={({ target }) =>
                                            setForm((state) => ({
                                                ...state,
                                                name: target.value,
                                            }))
                                        }
                                    />
                                </div>
                                <div>
                                    email:{' '}
                                    <input
                                        type="text"
                                        value={form.email}
                                        onChange={({ target }) =>
                                            setForm((state) => ({
                                                ...state,
                                                email: target.value,
                                            }))
                                        }
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>{`name: ${user.name}`}</div>
                                <div>{`email: ${user.email}`}</div>
                            </>
                        )}
                        <button
                            onClick={() => setIsEditing((state) => !state)}
                            disabled={isSubmiting}
                        >
                            {isEditing ? 'cancel' : 'edit'}
                        </button>
                        {isEditing && (
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleSaveUserInfo(user.id);
                                }}
                                disabled={isSubmiting}
                            >
                                save
                            </button>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
