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
    const backgroundColor = match(type)
        .with('success', () => 'bg-green-400')
        .with('warning', () => 'bg-yellow-400')
        .with('info', () => 'bg-gray-400')
        .with('error', () => 'bg-red-500')
        .otherwise(() => 'bg-white');
    const icon = match(type)
        .with('success', () => <CheckIcon size={24} fillColor="white" />)
        .with('warning', () => (
            <WarningFilledIcon size={24} fillColor="white" />
        ))
        .with('info', () => <InfoIcon size={24} fillColor="white" />)
        .with('error', () => <ErrorIcon size={24} fillColor="white" />)
        .otherwise(() => <></>);

    if (!display) return <></>;
    return (
        <div className="fixed right-0 top-0 z-10 max-md:w-full max-md:p-1 md:right-28 md:top-24">
            <div
                className={`${backgroundColor} flex justify-center rounded p-4 md:w-44`}
            >
                <div className={`flex w-36 items-center justify-between`}>
                    {icon}
                    <div className="text-white">
                        <p className="font-bold">{title}</p>
                        <p> {message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
