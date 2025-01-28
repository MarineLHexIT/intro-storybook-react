import { useState } from 'react';

/* Components */
import StartButton from '@/components/pomodoro-buttons/start-button.tsx';
import ResetButton from '@/components/pomodoro-buttons/reset-button.tsx';
import PomodoroWorkTimer, { PomodoroTimerActions } from '@/components/pomodoro-timers/pomodoro-work-timer.tsx';

type PomodoroTimerType = 'work' | 'break';

const Pomodoro = () => {

    const [action, setAction] = useState<PomodoroTimerActions>('reset');
    const [pomodoroTimerType, setPomodoroTimerType] = useState<PomodoroTimerType>('work');

    return <>

        {
            pomodoroTimerType === 'work' && <>
                <PomodoroWorkTimer action={ action } onFinish={ () => setPomodoroTimerType('break') }/>
                <div className="flex flex-row gap-2">
                    <StartButton action={ action } onStart={ () => setAction((action === 'pause') ? 'resume' : 'start') }
                                 onStop={ () => setAction('pause') }/>
                    <ResetButton action={ action } onReset={ () => setAction('reset') }/>
                </div>
            </>
        }
        {
            pomodoroTimerType === 'break' && 'Time to take a break…'
        }


    </>;
};

export default Pomodoro;