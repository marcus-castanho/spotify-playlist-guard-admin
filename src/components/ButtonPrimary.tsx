import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonPrimaryProps = {
    content: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
    stretch?: boolean;
};

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
    content,
    onClick = () => {},
    type = 'button',
    disabled = false,
    stretch = false,
}) => {
    const disabledStyleClass = disabled ? 'opacity-50' : 'hover:scale-105';
    const styleClass = stretch
        ? 'w-full rounded-[500px] bg-primary-verdant px-8 py-3 font-bold text-white dark:text-black'
        : 'rounded-[500px] bg-primary-verdant px-8 py-3 font-bold text-white dark:text-black';

    return (
        <div className={disabledStyleClass}>
            <button
                type={type}
                onClick={onClick}
                className={styleClass}
                disabled={disabled}
            >
                {content}
            </button>
        </div>
    );
};
