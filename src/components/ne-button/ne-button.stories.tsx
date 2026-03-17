import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
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
    },
    args: {},
};

export default meta;

type Story = StoryObj<NeonButton>;

export const Primary: Story = {
    args: {
        disabled: true,
    },
    render: (props) => <ne-button {...props}>Test</ne-button>,
};

/**
* Storybook story without custom render function
*/
export const Secondary: Story = {
    args: {
        href: 'www.google.com'
    },
};
