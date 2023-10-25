/**
 * JSDOM does now implement window.matchMedia() so it must be mocked - https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 *
 * This file must be imported in the file in which the tests use window.matchMedia()
 */

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});