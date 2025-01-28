import { Button } from '@/components/ui/button.tsx';
import { PomodoroTimerAction } from '@/components/pomodoro-timers/pomodoro-work-timer.tsx';

interface ResetButtonProps {
    action: PomodoroTimerAction;
    onReset: () => void;
    disabled?: boolean;
}

const ResetButton = ({ action, onReset, disabled = false }: ResetButtonProps) => {
    
    type StoppedPomodoroTimerAction = Extract<PomodoroTimerAction, 'stop' | 'reset'>;

    const isStoppedAction = (action: PomodoroTimerAction): action is StoppedPomodoroTimerAction => {
        return action === 'stop' || action === 'reset';
    };

    return <Button onClick={ onReset } disabled={ disabled || isStoppedAction(action) }>
        Reset
    </Button>;
};

export default ResetButton;