'use client';

import React, { useState } from 'react';
import { postAuth } from '@/services/spotifyPlaylistGuardApi';
import { useRouter } from 'next/navigation';
import { useToast } from '@/contexts/ToastContext';
import { handleUncaughtClientError } from '@/errors/clientErrorHandlers';
import { FormRow } from '@/components/FormRow';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { FormField } from '@/components/FormField';

export const SignInForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();
    const { toast } = useToast();
    const [isSubmiting, setIsSubmitting] = useState(false);

    const handleMessages = (status: number) => {
        if (status === 401) toast('Incorrect data. Please try again', 'error');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        postAuth(form)
            .then(({ success, status }) => {
                if (!success) throw { status };
            })
            .then(() => toast('Successfully signed in.', 'success'))
            .then(() => router.push('/home'))
            .catch((error) => {
                if (error.status) return handleMessages(error.status);

                handleUncaughtClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="top-1/2 max-w-xs rounded-lg border-gray-100 bg-white p-3.5 dark:bg-black sm:border-[1px]"
            >
                <FormRow columns={1}>
                    <FormField.Root inputId="email" label="E-mail" required>
                        <FormField.TextInput
                            inputId="email"
                            defaultValue={''}
                            required
                            onChange={(value) =>
                                setForm((state) => ({ ...state, email: value }))
                            }
                        />
                    </FormField.Root>
                </FormRow>
                <FormRow columns={1}>
                    <FormField.Root
                        inputId="password"
                        label="Password"
                        required
                    >
                        <FormField.PasswordInput
                            inputId="password"
                            required
                            onChange={(value) =>
                                setForm((state) => ({
                                    ...state,
                                    password: value,
                                }))
                            }
                        />
                    </FormField.Root>
                </FormRow>
                <div className="flex flex-col p-4 sm:flex-row">
                    <ButtonPrimary type="submit" disabled={isSubmiting}>
                        Sign In
                    </ButtonPrimary>
                </div>
            </form>
        </>
    );
};
