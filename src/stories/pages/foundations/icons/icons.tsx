import React, { ReactNode } from 'react';
import { WarningIcon } from '@/components/icons/WarningIcon';
import { WarningFilledIcon } from '@/components/icons/WarningFilledIcon';
import { CheckIcon } from '@/components/icons/CheckIcon';
import { InfoIcon } from '@/components/icons/InfoIcon';
import { ErrorIcon } from '@/components/icons/ErrorIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';
import { SunIcon } from '@/components/icons/SunIcon';
import { CrossMarkIcon } from '@/components/icons/CrossMarkIcon';
import { EyeIcon } from '@/components/icons/EyeIcon';
import { EyeSlashIcon } from '@/components/icons/EyeSlashIcon';
import { GuardIcon } from '@/components/icons/GuardIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { ExternalLinkIcon } from '@/components/icons/ExternalLinkIcon';
import { DefaultAvatarIcon } from '@/components/icons/DefaultAvatarIcon';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import { ChevronLeftIcon } from '@/components/icons/ChevronLeftIcon';
import { ChevronRightIcon } from '@/components/icons/ChevronRightIcon';
import { TrashIcon } from '@/components/icons/TrashIcon';
import { PencilIcon } from '@/components/icons/PencilIcon';
import { PlusIcon } from '@/components/icons/PlusIcon';

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
    {
        title: 'moon',
        component: <MoonIcon size={24} key={MoonIcon.name} />,
    },
    {
        title: 'sun',
        component: <SunIcon size={24} key={MoonIcon.name} />,
    },
    {
        title: 'cross-mark',
        component: <CrossMarkIcon size={24} key={CrossMarkIcon.name} />,
    },
    {
        title: 'eye',
        component: <EyeIcon size={24} key={EyeIcon.name} />,
    },
    {
        title: 'eye-slash',
        component: <EyeSlashIcon size={24} key={EyeIcon.name} />,
    },
    {
        title: 'guard',
        component: <GuardIcon size={24} key={GuardIcon.name} />,
    },
    {
        title: 'github',
        component: <GitHubIcon size={24} key={GitHubIcon.name} />,
    },
    {
        title: 'external-link',
        component: <ExternalLinkIcon size={24} key={ExternalLinkIcon.name} />,
    },
    {
        title: 'default-avatar',
        component: <DefaultAvatarIcon size={24} key={DefaultAvatarIcon.name} />,
    },
    {
        title: 'arrow-left',
        component: <ArrowLeftIcon size={24} key={ArrowLeftIcon.name} />,
    },
    {
        title: 'chevron-left',
        component: <ChevronLeftIcon size={24} key={ChevronLeftIcon.name} />,
    },
    {
        title: 'chevron-right',
        component: <ChevronRightIcon size={24} key={ChevronRightIcon.name} />,
    },
    {
        title: 'trash',
        component: <TrashIcon size={24} key={TrashIcon.name} />,
    },
    {
        title: 'pencil',
        component: <PencilIcon size={24} key={PencilIcon.name} />,
    },
    {
        title: 'plus',
        component: <PlusIcon size={24} key={PlusIcon.name} />,
    },
];
