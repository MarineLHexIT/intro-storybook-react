import { Button, ButtonProps } from '@/components/ui/button';
import { useCallback, useEffect, useState } from 'react';

interface StartButtonProps {
    isStarted?: boolean;
    inProgress?: boolean;
    onStart: () => void;
    onStop: () => void;
}

const StartButton = (
    {
        onStart,
        onStop,
        isStarted = false,
        inProgress = false,
        ...buttonProps
    }: StartButtonProps & ButtonProps) => {

    const [paused, setPaused] = useState<boolean>(!inProgress);
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

    useEffect(() => {
        setPaused(!inProgress);
    }, [inProgress]);

    return <Button { ...buttonProps } onClick={ onClick }>
        {
            paused ? (isStarted ? "Resume" : "Start") : "Pause"
        }
    </Button>
};

export default StartButton;