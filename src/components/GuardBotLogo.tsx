import React from 'react';
import { GuardIcon } from './icons/GuardIcon';

export const GuardBotLogo = () => {
    return (
        <div className="inline-block rounded-[2.5rem] border-2 border-black bg-white p-2 dark:border-white">
            <GuardIcon size={40} fillColor="black" />
        </div>
    );
};
