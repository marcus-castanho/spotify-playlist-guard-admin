import { usePagination } from '@/hooks/usePagination';
import React, { FC, ReactNode } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { match } from 'ts-pattern';

const GapBox = () => {
    return <div className="p-2">...</div>;
};

type PageBoxProps = {
    page: number;
    isSelected: boolean;
};
const PageBox: FC<PageBoxProps> = ({ page }) => {
    return (
        <div className="flex h-6 min-w-[2rem] items-center justify-center">
            {page}
        </div>
    );
};

type NavButtonProps = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    isSelected?: boolean;
};
const NavButton: FC<NavButtonProps> = ({
    children,
    onClick,
    disabled = false,
    isSelected = false,
}) => {
    return (
        <button
            onClick={() => onClick()}
            className={match({ isSelected, disabled })
                .with(
                    { isSelected: true },
                    () =>
                        'flex items-center justify-between rounded-md bg-primary-verdant p-1 text-black',
                )
                .with(
                    { disabled: true },
                    () =>
                        'flex items-center justify-between rounded-md border-[1px] border-transparent p-1 opacity-50',
                )
                .otherwise(
                    () =>
                        'flex items-center justify-between rounded-md border-[1px] border-transparent p-1 hover:border-gray-100',
                )}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

type PaginationNavProps = {
    page: number;
    changePage: ReturnType<typeof usePagination>['changePage'];
    pagesIndexes: ReturnType<
        ReturnType<typeof usePagination>['getPagesIndexes']
    >['indexesArr'];
};

export const PaginationNav: FC<PaginationNavProps> = ({
    page,
    changePage,
    pagesIndexes,
}) => {
    const { theme } = useTheme();
    const lastPage = pagesIndexes[pagesIndexes.length - 1];

    return (
        <div className="flex gap-2 p-4">
            <NavButton
                onClick={() => changePage('previous')}
                disabled={page === 1}
            >
                <ChevronLeftIcon
                    size={16}
                    fillColor={theme === 'dark' ? 'white' : 'black'}
                />
                <div className="pr-2">Previous</div>
            </NavButton>
            <div className="flex gap-2 max-sm:hidden">
                {pagesIndexes.map((pageIndex) =>
                    pageIndex === null ? (
                        <GapBox key={pageIndex} />
                    ) : (
                        <NavButton
                            key={pageIndex}
                            onClick={() => changePage(pageIndex)}
                            isSelected={page === pageIndex}
                        >
                            <PageBox
                                page={pageIndex}
                                isSelected={page === pageIndex}
                            />
                        </NavButton>
                    ),
                )}
            </div>
            <NavButton
                onClick={() => changePage('next')}
                disabled={page === lastPage}
            >
                <div className="pl-2">Next</div>
                <ChevronRightIcon
                    size={16}
                    fillColor={theme === 'dark' ? 'white' : 'black'}
                />
            </NavButton>
        </div>
    );
};
