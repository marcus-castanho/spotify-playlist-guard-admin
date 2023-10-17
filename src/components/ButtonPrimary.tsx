import React, { FC, ButtonHTMLAttributes } from 'react';
import { match } from 'ts-pattern';

type ButtonPrimaryProps = {
    content: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
    scale?: boolean;
};

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
    content,
    onClick = () => {},
    type = 'button',
    disabled = false,
    scale = true,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={match({ disabled, scale })
                .with({ disabled: true }, () => 'opacity-50')
                .with({ scale: false }, () => '')
                .otherwise(() => 'hover:scale-105')}
        >
            <div
                className={
                    'rounded-[500px] bg-primary-verdant px-8 py-3 font-bold text-white dark:text-black'
                }
            >
                {content}
            </div>
        </button>
    );
};
