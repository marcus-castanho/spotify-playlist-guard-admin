import { Theme } from '@/contexts/ThemeContext';
import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';

export function emitBackgroundChange(theme: Theme) {
    const channel = addons.getChannel();

    channel.emit(UPDATE_GLOBALS, {
        globals: {
            theme,
            backgrounds:
                theme === 'dark'
                    ? { name: 'dark', value: 'black' }
                    : { name: 'light', value: 'white' },
        },
    });
}
