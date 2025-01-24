import { useEffect, useState } from 'react';
import { Duration } from 'luxon';
import StartButton from '@/components/pomodoro-buttons/start-button.tsx';
import ResetButton from '@/components/pomodoro-buttons/reset-button.tsx';

const Pomodoro = () => {

    const [timer, setTimer] = useState<number>(0);
    const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

    // useEffect(() => {
    //
    //     const intervalID = setInterval(() => {
    //         setTimer(prevState => prevState + 1);
    //     }, 1000);
    //
    //     return () => clearInterval(intervalID);
    // }, []);


    const startTimer = () => {
        const intervalID = setInterval(() => {
            setTimer(prevState => prevState + 1);
        }, 1000);

        setTimerID(intervalID);
    };

    const pauseTimer = () => {
        if ( timerID === null ) {
            return;
        }
        clearInterval(timerID);
        setTimerID(null);
    };

    const resetTimer = () => {
        if ( timerID !== null ) {
            clearInterval(timerID);
        }

        setTimerID(null);
        setTimer(0);
    };

    useEffect(() => {
    }, []);

    const duration = Duration.fromDurationLike({ seconds: timer });
    const hasStarted = timer > 0;

    return <>
        <span>
            { duration.toISOTime({ suppressMilliseconds: true }) }
        </span>

        <div className="flex flex-row gap-2">
            <StartButton onStart={ startTimer } onStop={ pauseTimer } inProgress={ !!timerID }
                         isStarted={ timer > 0 }/>
            <ResetButton onReset={ resetTimer } disabled={ !hasStarted}/>
        </div>
    </>;
};

export default Pomodoro;