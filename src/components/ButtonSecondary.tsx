import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonSecondaryProps = {
    content: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    stretch?: boolean;
};

export const ButtonSecondary: FC<ButtonSecondaryProps> = ({
    content,
    onClick = () => {},
    type = 'button',
    stretch = false,
}) => {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={
                    stretch
                        ? 'w-full rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:scale-105 hover:text-black dark:bg-black dark:hover:text-white'
                        : 'rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:scale-105 hover:text-black dark:bg-black dark:hover:text-white'
                }
            >
                {content}
            </button>
        </div>
    );
};
