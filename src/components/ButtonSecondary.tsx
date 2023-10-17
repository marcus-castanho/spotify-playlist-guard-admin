import React, { FC, ButtonHTMLAttributes } from 'react';
import { match } from 'ts-pattern';

type ButtonSecondaryProps = {
    content: string;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    stretch?: boolean;
    scale?: boolean;
};

export const ButtonSecondary: FC<ButtonSecondaryProps> = ({
    content,
    onClick = () => {},
    type = 'button',
    stretch = false,
    scale = true,
}) => {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={match({ stretch, scale })
                    .with(
                        { stretch: true, scale: true },
                        () =>
                            'w-full rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:scale-105 hover:text-black dark:bg-black dark:hover:text-white',
                    )
                    .with(
                        { stretch: false, scale: true },
                        () =>
                            'rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:scale-105 hover:text-black dark:bg-black dark:hover:text-white',
                    )
                    .with(
                        { stretch: true, scale: false },
                        () =>
                            'w-full rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:text-black dark:bg-black dark:hover:text-white',
                    )
                    .with(
                        { stretch: false, scale: false },
                        () =>
                            'rounded-[500px] border-[1px] border-gray-100 bg-white px-8 py-3 font-bold text-gray-100 hover:text-black dark:bg-black dark:hover:text-white',
                    )
                    .otherwise(() => '')}
            >
                {content}
            </button>
        </div>
    );
};
