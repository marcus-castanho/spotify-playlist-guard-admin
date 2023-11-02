import React from 'react';
import { render } from '@testing-library/react';
import { GuardBotLogo } from '@/components/GuardBotLogo';

const LABEL = 'guard-bot-logo';

describe('GuardBotLogo', () => {
    it('should render', () => {
        const { getByLabelText } = render(<GuardBotLogo />);

        const container = getByLabelText(LABEL);

        expect(container).toBeDefined();
    });
});
