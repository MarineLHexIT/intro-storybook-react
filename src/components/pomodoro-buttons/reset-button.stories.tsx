
import '@/index.css';
import ResetButton from './reset-button';

export default {
    title: 'Pomodoro/Reset Button',
    component: ResetButton,
    tags: ['autodocs'],
    argTypes: {
        action: {
            options: ['stop', 'start', 'resume', 'pause', 'reset'],
            description: 'The current action',
            table: {
                defaultValue: { summary: "stop" }
            }
        },
        disabled: {

        },
        onReset: { action: 'reset clicked'}
    },
};

export const Default = {
}