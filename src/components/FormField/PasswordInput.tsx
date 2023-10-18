'use client';

import React, { FC, useState } from 'react';
import { EyeIcon } from '../icons/EyeIcon';
import { EyeSlashIcon } from '../icons/EyeSlashIcon';
import { useTheme } from '@/contexts/ThemeContext';

type PasswordInputProps = {
    id: string;
    label: string;
    placeHolder?: string;
    required?: boolean;
    onChange?: (text: string) => void;
    disabled?: boolean;
};

export const PasswordInput: FC<PasswordInputProps> = ({
    id,
    placeHolder = '',
    required = false,
    onChange = () => {},
    disabled = false,
}) => {
    const [visible, setVisible] = useState(false);
    const { theme } = useTheme();

    return (
        <div className="relative">
            <input
                type={visible ? 'text' : 'password'}
                id={id}
                onChange={({ target }) => onChange(target.value)}
                className="w-full rounded border-[1px] py-0.5 pl-3.5 pr-11 dark:border-gray-50 dark:bg-black"
                required={required}
                placeholder={placeHolder}
                disabled={disabled}
            />
            <button
                type="button"
                onClick={() => setVisible((state) => !state)}
                className="absolute right-4 top-1/2 translate-y-[-50%]"
            >
                {!visible ? (
                    <EyeSlashIcon
                        size={24}
                        fillColor={theme === 'dark' ? 'white' : 'black'}
                    />
                ) : (
                    <EyeIcon
                        size={24}
                        fillColor={theme === 'dark' ? 'white' : 'black'}
                    />
                )}
            </button>
        </div>
    );
};
