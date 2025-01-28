import StartButton from '@/components/pomodoro-buttons/start-button.tsx';
import '@/index.css';

export default {
    title: 'Pomodoro/Start Button',
    component: StartButton,
    tags: ['autodocs'],
    argTypes: {
        action: {
            options: ['start', 'resume', 'pause', 'reset'],
            description: 'The current action',
            table: {
                defaultValue: {summary: "stop"}
            }
        }
    }
};

export const Default = {
}

export const StartedButton = {
    args: {
        action: "start"
    }
}

export const PausedButton = {
    args: {
        action: "pause"
    }
}