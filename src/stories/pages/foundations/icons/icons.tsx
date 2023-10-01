import React, { ReactNode } from 'react';
import { WarningIcon } from '@/components/icons/WarningIcon';
import { WarningFilledIcon } from '@/components/icons/WarningFilledIcon';
import { CheckIcon } from '@/components/icons/CheckIcon';

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
];
