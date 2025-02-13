import { Duration } from 'luxon';
import { useEffect, useState } from 'react';

export type PomodoroTimerActions = 'stop' | 'start' | 'resume' | 'pause' | 'reset';

interface PomodoroTimerProps {
    action : PomodoroTimerActions;
    onFinish: () => void;
    initialTimer: number;
    objectiveTimer: number;
}

const SECONDS_TIME = 10;

const PomodoroWorkTimer = ({
                               action,
                               onFinish,
                               initialTimer = 0,
                               objectiveTimer,
                           }: PomodoroTimerProps) => {

    const [timer, setTimer] = useState<number>(initialTimer);
    const [timerID, setTimerID] = useState<number|undefined>();

    useEffect(() => {

        console.log("action : ", action);

        switch(action) {
            case 'start':
                start();
                break;
            case 'resume':
                resume();
                break;
            case 'pause':
                pause();
                break;
            case 'reset':
            case 'stop':
                reset();
                break;
        }
    }, [action]);

    useEffect(() => {
        if (timer === objectiveTimer) {
            pause();
            onFinish();
        }
    }, [timer, objectiveTimer]);

    const getTimerID = () => {
        return setInterval(() => {
            setTimer((prev) => prev + 1);
        }, SECONDS_TIME) as unknown as number;
    }

    const start = () => {
        if (timerID) {
            return;
        }
        setTimer(initialTimer);
        setTimerID(getTimerID());
    }

    const pause = () => {
        if(!timerID) {
            return;
        }
        clearInterval(timerID);
        setTimerID(undefined)
    }

    const resume = () => {
        if (timerID) {
            return;
        }

        setTimerID(getTimerID());
    }

    const reset = () => {
        clearInterval(timerID);
        setTimerID(undefined);
        setTimer(initialTimer);
    }

    const duration = Duration.fromDurationLike({ seconds: timer });
    const maxDuration = Duration.fromDurationLike({ seconds: objectiveTimer });

    return <>
        <span>
            { duration.toISOTime({ suppressMilliseconds: true }) }
            &nbsp;/&nbsp;
            { maxDuration.toISOTime({ suppressMilliseconds: true }) }
        </span>
    </>
};

export default PomodoroWorkTimer;