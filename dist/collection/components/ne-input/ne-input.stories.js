import { expect } from "storybook/test";
const meta = {
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
export const Default = {
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
        const $inp = canvas.getByTestId('elem');
        const $form = canvas.getByTestId('form');
        $inp.name = 'input';
        await expect($inp.value).toBe('');
        await expect($form).toHaveFormValues({ 'input': '' });
        $inp.value = 'Test';
        await expect($inp.value).toBe('Test');
        await expect($form).toHaveFormValues({ 'input': 'Test' });
        $inp.value = '';
        $inp.name = null;
        await expect($form).toHaveFormValues({});
    },
};
export const Disabled = {
    args: {
        disabled: true,
        value: 'test',
        name: 'input',
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
        const $inp = canvas.getByTestId('elem');
        const $form = canvas.getByTestId('form');
        $inp.disabled = true;
        await expect($inp.value).toBe('test');
        await expect($form).toHaveFormValues({});
        await userEvent.type($inp, 'World');
        await expect($inp.value).toBe('test');
        await expect($form).toHaveFormValues({});
        $inp.name = null;
        $inp.value = 'Hello';
    },
};
