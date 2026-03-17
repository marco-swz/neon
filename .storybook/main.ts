const config = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    core: {
        disableTelemetry: true,
    },
    addons: ['@storybook/addon-links', '@storybook/addon-docs'],
    framework: {
        name: '@stencil/storybook-plugin',
    },
};

export default config;
