import React, { FC, InputHTMLAttributes } from 'react';

type TextInputProps = {
    id: string;
    defaultValue?: string;
    placeHolder?: string;
    required?: boolean;
    onChange?: (text: string) => void;
    type?: Extract<
        InputHTMLAttributes<HTMLButtonElement>['type'],
        'email' | 'tel' | 'text' | 'url'
    >;
    disabled?: boolean;
};

export const TextInput: FC<TextInputProps> = ({
    id,
    defaultValue = '',
    placeHolder = '',
    required = false,
    onChange = () => {},
    type = 'text',
    disabled = false,
}) => {
    return (
        <input
            type={type}
            id={id}
            onChange={({ target }) => onChange(target.value)}
            className="w-full rounded border-[1px] px-3.5 py-0.5 dark:border-gray-50 dark:bg-black"
            required={required}
            defaultValue={defaultValue}
            placeholder={placeHolder}
            disabled={disabled}
        />
    );
};
