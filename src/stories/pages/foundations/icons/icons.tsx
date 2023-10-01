import React, { ReactNode } from 'react';
import { WarningIcon } from '@/components/icons/WarningIcon';
import { WarningFilledIcon } from '@/components/icons/WarningFilledIcon';
import { CheckIcon } from '@/components/icons/CheckIcon';
import { InfoIcon } from '@/components/icons/InfoIcon';
import { ErrorIcon } from '@/components/icons/ErrorIcon';

export const icons: { title: string; component: ReactNode }[] = [
    {
        title: 'warning',
        component: <WarningIcon size={24} key={WarningIcon.name} />,
    },
    {
        title: 'warning-filled',
        component: <WarningFilledIcon size={24} key={WarningFilledIcon.name} />,
    },
    {
        title: 'check',
        component: <CheckIcon size={24} key={CheckIcon.name} />,
    },
    {
        title: 'info',
        component: <InfoIcon size={24} key={InfoIcon.name} />,
    },
    {
        title: 'error',
        component: <ErrorIcon size={24} key={ErrorIcon.name} />,
    },
];
