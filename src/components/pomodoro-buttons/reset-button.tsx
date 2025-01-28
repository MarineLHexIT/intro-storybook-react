import { Button } from '@/components/ui/button.tsx';
import { PomodoroTimerActions } from '@/components/pomodoro-timers/pomodoro-work-timer.tsx';

interface ResetButtonProps {
    action: PomodoroTimerActions;
    onReset: () => void;
    disabled?: boolean;
}

const ResetButton = ({ action, onReset, disabled = false }: ResetButtonProps) => {

    type StoppedPomodoroTimerAction = Extract<PomodoroTimerActions, 'stop' | 'reset'>;

    const isStoppedAction = (action: PomodoroTimerActions): action is StoppedPomodoroTimerAction => {
        return action === 'stop' || action === 'reset';
    };

    return <Button onClick={ onReset } disabled={ disabled || isStoppedAction(action) }>
        Reset
    </Button>;
};

export default ResetButton;