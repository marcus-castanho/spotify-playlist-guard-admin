import React, { ReactNode } from 'react';
import { Table } from '@/stories/components/Table';
import { fontWeight, FontWeight } from '@/styles/theme';

export const FontWeightsTable = () => {
    const fontWeightKeys = Object.keys(fontWeight) as FontWeight[];
    const headers = {
        weight: 'Weight',
        value: 'Value',
        example: 'Example',
    };
    const rows: {
        id: FontWeight;
        cells: {
            weight: string;
            value: (typeof fontWeight)[FontWeight];
            example: ReactNode;
        };
    }[] = fontWeightKeys.map((fontWeightKey) => {
        return {
            id: fontWeightKey,
            cells: {
                weight: fontWeightKey,
                value: fontWeight[fontWeightKey],
                example: (
                    <p
                        style={{
                            fontWeight: fontWeight[fontWeightKey],
                        }}
                    >
                        Text
                    </p>
                ),
            },
        };
    });

    return <Table<keyof typeof headers> headers={headers} rows={rows} />;
};
