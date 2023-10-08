import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonPrimaryProps = {
    content: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
};

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
    content,
    onClick = () => {},
    type = 'button',
    disabled = false,
}) => {
    const styleClass = disabled
        ? 'rounded-[500px] bg-primary-verdant px-8 py-3 font-bold text-white opacity-50 dark:text-black'
        : 'rounded-[500px] bg-primary-verdant px-8 py-3 font-bold text-white hover:scale-105 dark:text-black';
    return (
        <button
            type={type}
            onClick={onClick}
            className={styleClass}
            disabled={disabled}
        >
            {content}
        </button>
    );
};
