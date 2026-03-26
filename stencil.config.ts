import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'neon',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
            generateTypeDeclarations: true,
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
            copy: [{ src: '**/*.html' }, { src: '**/*.css' }]
        },
        {
            type: 'docs-json',
            file: './custom-elements.json',
        },
    ],
    testing: {
        browserHeadless: "shell",
    },
};
