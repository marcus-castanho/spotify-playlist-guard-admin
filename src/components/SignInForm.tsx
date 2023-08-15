'use client';

import React, { useState } from 'react';
import { postAuth } from '@/services/spotifyPlaylistGuardApi';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/storage/cookies/client';

export const SignInForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postAuth(form)
            .then(({ success, data }) => {
                if (!success) return;
                const token = data;
                setCookie('s-p-guard-admin:token', token, {
                    maxAge: 60 * 60 * 1,
                });
            })
            .then(() => {
                router.push('/home');
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                            setForm((state) => ({
                                ...state,
                                email: event.target.value,
                            }))
                        }
                    />
                </label>
                <label>
                    Password
                    <input
                        id="password"
                        type="password"
                        value={form.password}
                        onChange={(event) =>
                            setForm((state) => ({
                                ...state,
                                password: event.target.value,
                            }))
                        }
                    />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </>
    );
};
