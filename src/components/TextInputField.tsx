import React, { FC, InputHTMLAttributes } from 'react';

type TextInputFieldProps = {
    id: string;
    label: string;
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

export const TextInputField: FC<TextInputFieldProps> = ({
    id,
    label,
    defaultValue = '',
    placeHolder = '',
    required = false,
    onChange = () => {},
    type = 'text',
    disabled = false,
}) => {
    return (
        <div className="rounded-lg bg-gray-50 p-4 dark:bg-black">
            <label htmlFor={id} className="block pb-2 font-bold">
                {label}
                {required && <span className="pl-1 text-secondary-red">*</span>}
            </label>
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
        </div>
    );
};
