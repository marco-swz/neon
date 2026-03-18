import type { Meta, StoryObj } from '@storybook/web-components';
import { expect } from 'storybook/test';
import { NeonInput } from './ne-input';

const meta: Meta<NeonInput> = {
    title: 'NeonInput',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        type: {
            control: 'select',
            options: [
                'email', 'hidden', 'month', 'number', 'password', 'search', 'tel', 'text', 'time', 'week', 'datetime'
            ],
        },
    },
    args: {},
};

export default meta;

type Story = StoryObj<NeonInput>;

export const Default: Story = {
    args: {},
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `
            <form data-testid="form">
                <ne-input data-testid="elem" ${attrs}></ne-input>
            <form>
        `;
    },
    play: async ({ canvas }) => {
        const $inp = canvas.getByTestId<NeonInput & HTMLElement>('elem');
        const $form = canvas.getByTestId<HTMLFormElement>('form');

        $inp.name = 'input';

        await expect($inp.value).toBe('');
        let data = new FormData($form);
        await expect(data.get('input')).toBe('');

        $inp.value = 'Test';
        await expect($inp.value).toBe('Test');
        await expect(data.get('input')).toBe('Test');

        $inp.value = '';
        $inp.name = null;
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (props) => {
        const attrs = Object.entries(props)
            .reduce((prev, [key, val]) => prev + `${key}="${val}"`, '');
        return `
            <form data-testid="form">
                <ne-input data-testid="elem" ${attrs}></ne-input>
            <form>
        `;
    },
    play: async ({ canvas, userEvent }) => {
        const $inp = canvas.getByTestId<NeonInput & HTMLElement>('elem');
        const $form = canvas.getByTestId<HTMLFormElement>('form');

        $inp.disabled = false;
        $inp.name = 'input';
        $inp.value = 'Hello';
        $inp.disabled = true;

        await expect($inp.value).toBe('Hello');
        let data = new FormData($form);
        await expect(data.has('input')).toBe(false);

        await userEvent.type($inp, 'World');
        await expect($inp.value).toBe('Hello');
        data = new FormData($form);
        await expect(data.has('input')).toBe(false);

        $inp.name = null;
        $inp.value = 'Hello';
    },
};
