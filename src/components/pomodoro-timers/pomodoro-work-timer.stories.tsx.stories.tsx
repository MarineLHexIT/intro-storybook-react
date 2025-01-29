import { Meta, StoryObj } from '@storybook/react';
import PomodoroWorkTimer from '@/components/pomodoro-timers/pomodoro-work-timer.tsx';

const meta = {
    title: 'Pomodoro/WorkTimer',
    component: PomodoroWorkTimer,
    tags: ['autodocs'],
    argTypes: {
        onFinish: { action: 'The timer has ended' },
    }
} satisfies Meta<typeof PomodoroWorkTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        action: 'reset',
        onFinish: () => {
        }
    }
};
