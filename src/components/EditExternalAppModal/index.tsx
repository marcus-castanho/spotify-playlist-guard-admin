import React, { FC } from 'react';
import { useExternalApp } from './hooks/useExternalApp';

export type EditExternalAppModalProps = {
    externalAppId: string;
};

export const EditExternalAppModal: FC<EditExternalAppModalProps> = ({
    externalAppId,
}) => {
    const { externalApp } = useExternalApp(externalAppId);

    if (!externalApp) return <>loading</>;
    return (
        <>
            {externalApp && (
                <div>
                    {'{'}
                    {Object.keys(externalApp).map((key) => {
                        return (
                            <div key={key}>
                                {`${key}: ${
                                    externalApp[key as keyof typeof externalApp]
                                }`}
                            </div>
                        );
                    })}
                    {'}'}
                </div>
            )}
        </>
    );
};
