import { usePagination } from '@/hooks/usePagination';
import React, { FC } from 'react';

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
    return (
        <>
            <button onClick={() => changePage('previous')}>
                previous page
            </button>
            {pagesIndexes.map((pageIndex) => {
                if (pageIndex === null) return '...';
                return (
                    <button
                        key={pageIndex}
                        onClick={() => changePage(pageIndex)}
                        style={{
                            border: page === pageIndex ? '1px red solid' : '',
                        }}
                    >
                        {pageIndex}
                    </button>
                );
            })}
            <button
                onClick={() => {
                    if (page === pagesIndexes[pagesIndexes.length - 1]) return;
                    return changePage('next');
                }}
            >
                next page
            </button>
        </>
    );
};
