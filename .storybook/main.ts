const config = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    core: {
        disableTelemetry: true,
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-docs',
        "@storybook/addon-vitest"
    ],
    framework: {
        name: '@storybook/web-components-vite',
    },
};

export default config;
