import { useCallback, useEffect, useState } from 'react';

/** Components */
import { Button, ButtonProps } from '@/components/ui/button.tsx';
import { PomodoroTimerActions } from '@/components/pomodoro-timers/pomodoro-work-timer.tsx';

interface StartButtonProps {
    action: PomodoroTimerActions;
    onStart: () => void;
    onStop: () => void;
}

const StartButton = (
    {
        action,
        onStart,
        onStop,
        ...buttonProps
    }: StartButtonProps & ButtonProps) => {

    const [paused, setPaused] = useState<boolean>(true);
    const [actionName, setActionName] = useState<string>('');

    useEffect(() => {
        switch (action) {
            case 'resume':
            case 'start':
                setActionName('Pause');
                break;
            case 'pause':
                setActionName('Resume');
                break;
            case 'stop':
            case 'reset':
                setActionName('Start');
                break;
        }
    }, [action])

    const onClick = useCallback(() => {

        if (paused) {
            onStart();
            setPaused(false);
        }
        else {
            onStop();
            setPaused(true);
        }
    }, [paused]);

    return <Button { ...buttonProps } onClick={ onClick }>
        {  actionName }
    </Button>
};

export default StartButton;