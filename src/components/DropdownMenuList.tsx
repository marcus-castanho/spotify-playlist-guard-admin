import React, { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

type HeaderProps = {
    children: ReactNode;
};
const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <div className="p-1">
            <div className="border-b-[1px] border-gray-100">{children}</div>
        </div>
    );
};

type ListItemProps = {
    children: ReactNode;
    border?: 'top' | 'bottom';
};
const ListItem: FC<ListItemProps> = ({ children, border }) => {
    return (
        <li
            className={match(border)
                .with('top', () => 'border-t-[1px] border-gray-100')
                .with('bottom', () => 'border-b-[1px] border-gray-100')
                .otherwise(() => '')}
        >
            <div className="flex w-full items-start rounded-[4px] p-3 hover:bg-gray-500">
                {children}
            </div>
        </li>
    );
};

type DropdownMenuListProps = {
    header?: ReactNode;
    itemsGroups: ReactNode[][];
};
export const DropdownMenuList: FC<DropdownMenuListProps> = ({
    header,
    itemsGroups,
}) => {
    return (
        <div className="rounded-lg bg-gray-700 text-white max-sm:h-full sm:w-[200px]">
            {header && <Header>{header}</Header>}
            <ul className="p-1">
                {itemsGroups
                    .map((items, groupIndex) => {
                        const isLastGroup =
                            groupIndex === itemsGroups.length - 1;
                        const isSecondLastGroup =
                            groupIndex === itemsGroups.length - 2;
                        const isSingleGroup = itemsGroups.length === 1;

                        return items.map((item, itemIndex) => {
                            const isFirstItem = itemIndex === 0;
                            const isLastItem = itemIndex === items.length - 1;
                            const border = match({
                                isSingleGroup,
                                isLastGroup,
                                isFirstItem,
                                isLastItem,
                                isSecondLastGroup,
                            })
                                .with({ isSingleGroup: true }, () => undefined)
                                .with(
                                    { isSecondLastGroup: true },
                                    () => undefined,
                                )
                                .with(
                                    { isLastGroup: true, isFirstItem: true },
                                    () => 'top' as const,
                                )
                                .with(
                                    { isLastItem: true, isLastGroup: false },
                                    () => 'bottom' as const,
                                )
                                .otherwise(() => undefined);

                            return (
                                <ListItem
                                    key={`${groupIndex}-${itemIndex}`}
                                    border={border}
                                >
                                    {item}
                                </ListItem>
                            );
                        });
                    })
                    .flat()}
            </ul>
        </div>
    );
};
