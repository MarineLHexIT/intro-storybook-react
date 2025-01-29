import { Meta, StoryObj } from '@storybook/react';
import Pomodoro from './Pomodoro.tsx';

const meta = {
    title: 'Pomodoro/Page',
    component: Pomodoro,
    tags: ['autodocs'],
} satisfies Meta<typeof Pomodoro>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
