'use client';

import React, { useState } from 'react';
import { postAuth } from '@/services/spotifyPlaylistGuardApi';
import { useRouter } from 'next/navigation';
import { useToast } from '@/contexts/ToastContext';
import { handleUncaughtClientError } from '@/errors/clientErrorHandlers';
import { TextInputField } from '@/components/TextInputField';
import { PasswordInputField } from '@/components/PasswordInputField';
import { FormRow } from '@/components/FormRow';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { useTheme } from '@/contexts/ThemeContext';

export const SignInForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();
    const { toast } = useToast();
    const [isSubmiting, setIsSubmitting] = useState(false);
    const { theme } = useTheme();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        postAuth(form)
            .then(({ success }) => {
                if (!success) throw new Error('Failed to authenticate');
            })
            .then(() => toast('Successfully signed in.', 'success'))
            .then(() => router.push('/home'))
            .catch((error) => {
                handleUncaughtClientError(error);
                toast('Error while performing this operation', 'error');
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="top-1/2 max-w-xs rounded-lg bg-white p-3.5 dark:bg-black"
            >
                <FormRow columns={1}>
                    <TextInputField
                        id="email"
                        label="Email"
                        defaultValue={''}
                        required
                        onChange={(value) =>
                            setForm((state) => ({ ...state, email: value }))
                        }
                    />
                </FormRow>
                <FormRow columns={1}>
                    <PasswordInputField
                        id="password"
                        label="Password"
                        required
                        onChange={(value) =>
                            setForm((state) => ({ ...state, password: value }))
                        }
                        theme={theme}
                    />
                </FormRow>
                <div className="p-4">
                    <ButtonPrimary
                        content="Sign In"
                        type="submit"
                        disabled={isSubmiting}
                        stretch
                    />
                </div>
            </form>
        </>
    );
};
