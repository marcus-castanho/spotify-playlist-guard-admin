import React, { FC } from 'react';
import { ToastType } from '@/contexts/ToastContext';
import { match } from 'ts-pattern';
import { CheckIcon } from './icons/CheckIcon';
import { WarningFilledIcon } from './icons/WarningFilledIcon';
import { InfoIcon } from './icons/InfoIcon';
import { ErrorIcon } from './icons/ErrorIcon';

type ToastProps = {
    display: boolean;
    message: string;
    type: ToastType;
};

export const Toast: FC<ToastProps> = ({ display, message, type }) => {
    const title = match(type)
        .with('success', () => 'Success')
        .with('warning', () => 'Warning')
        .with('info', () => 'Info')
        .with('error', () => 'Error')
        .otherwise(() => 'Info');
    const icon = match(type)
        .with('success', () => <CheckIcon size={24} fillColor="white" />)
        .with('warning', () => (
            <WarningFilledIcon size={24} fillColor="white" />
        ))
        .with('info', () => <InfoIcon size={24} fillColor="white" />)
        .with('error', () => <ErrorIcon size={24} fillColor="white" />)
        .otherwise(() => <></>);
    const toastContainerClass = match(type)
        .with('success', () => 'bg-green-400 flex justify-center rounded p-4')
        .with('warning', () => 'bg-yellow-400 flex justify-center rounded p-4')
        .with('info', () => 'bg-gray-100 flex justify-center rounded p-4')
        .with('error', () => 'bg-red-500 flex justify-center rounded p-4')
        .otherwise(() => 'bg-white flex justify-center rounded p-4');

    if (!display) return <></>;
    return (
        <div className="fixed right-0 top-0 z-10 max-md:w-full max-md:p-1 md:right-3 md:top-3">
            <div className={toastContainerClass}>
                <div className={`flex max-w-xs items-center justify-between`}>
                    <div className="w-6">{icon}</div>
                    <div className="pl-4 text-white">
                        <p className="font-bold">{title}</p>
                        <p> {message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
