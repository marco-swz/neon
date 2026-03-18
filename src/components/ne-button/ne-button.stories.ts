import type { Meta, StoryObj } from '@storybook/web-components';
import { expect } from 'storybook/test';
import { NeonButton } from './ne-button';

const meta: Meta<NeonButton> = {
    title: 'NeonButton',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        href: { control: 'text' },
        variant: {
            control: 'select',
            options: ['primary', 'outline', 'ghost'],
        },
        theme: {
            control: 'select',
            options: ['success', 'info', 'warning', 'danger'],
        },
    },
    args: {},
};

export default meta;

type Story = StoryObj<NeonButton>;

export const Default: Story = {
    args: {},
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `<ne-button data-testid="btn" ${attrs}>Button Text</ne-button>`;
    },
    play: async ({ canvas }) => {
        const $btn = canvas.getByTestId<NeonButton & HTMLElement>('btn');
        await expect($btn).toHaveTextContent('Button Text');
        $btn.innerHTML = 'Test';
        await expect($btn).toHaveTextContent('Test');
        $btn.innerHTML = 'Button Text';
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `<ne-button data-testid="btn" ${attrs}>Button Text</ne-button>`;
    },
    play: async ({ canvas, userEvent }) => {
        const $btn = canvas.getByTestId<NeonButton & HTMLElement>('btn');

        $btn.onclick = () => {
            $btn.setAttribute('count', String(Number($btn.getAttribute('count') ?? 0) + 1));
        }

        $btn.disabled = false;

        await userEvent.click($btn);
        await expect($btn).toHaveAttribute('count', '1');

        $btn.disabled = true;

        await userEvent.click($btn);
        await expect($btn).toHaveAttribute('count', '1');

        $btn.disabled = false;

        await userEvent.click($btn);
        await expect($btn).toHaveAttribute('count', '2');
    },
};

export const Loading: Story = {
    args: {
        loading: true,
    },
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `<ne-button data-testid="btn" ${attrs}>Button Text</ne-button>`;
    },
};

export const Variant: Story = {
    args: {
        variant: 'primary'
    },
    play: async ({ canvas }) => {
        await expect(canvas.getByText('Button Text', { exact: true })).toBeVisible();
    },
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `<ne-button ${attrs}>Button Text</ne-button>`;
    },
};

export const Link: Story = {
    args: {
        href: 'www.google.com'
    },
    play: async ({ canvas }) => {
        await expect(canvas.getByText('Button Text', { exact: true })).toBeVisible();
    },
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `<ne-button ${attrs}>Button Text</ne-button>`;
    },
};
