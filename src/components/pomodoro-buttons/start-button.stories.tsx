import StartButton from '@/components/pomodoro-buttons/start-button.tsx';
import '@/index.css';

export default {
    title: 'Pomodoro/Start Button',
    component: StartButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
    }
}

export const InProgress = {
    args: {
        isStarted: true,
        inProgress: true,
    }
}

export const Paused = {
    args: {
        isStarted: true,
        inProgress: false,
    }
}