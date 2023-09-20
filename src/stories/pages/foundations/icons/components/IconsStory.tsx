import React, { FC, useState } from 'react';
import { SearchInput } from './SearchInput';
import { IconsList } from './IconsList';
import { icons } from '../icons';

export const IconsStory: FC = () => {
    const [filterValue, setFilterValue] = useState('');
    const filteredIcons = icons.filter(({ title }) =>
        title.includes(filterValue),
    );

    return (
        <>
            <SearchInput onChange={(value) => setFilterValue(value)} />
            <IconsList icons={filteredIcons} />
        </>
    );
};
