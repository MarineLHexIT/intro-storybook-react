import { useState } from 'react';

/* Components */
import StartButton from '@/components/pomodoro-buttons/start-button.tsx';
import ResetButton from '@/components/pomodoro-buttons/reset-button.tsx';
import PomodoroWorkTimer, { PomodoroTimerActions } from '@/components/pomodoro-timers/pomodoro-work-timer.tsx';
import { Button } from '@/components/ui/button.tsx';
import PomodoroBreakTimer from '@/components/pomodoro-timers/pomodoro-break-timer.tsx';

type PomodoroTimerType = 'work' | 'break';

const Pomodoro = () => {

    const [action, setAction] = useState<PomodoroTimerActions>('reset');
    const [pomodoroTimerType, setPomodoroTimerType] = useState<PomodoroTimerType>('work');

    return <div className="flex flex-col gap-2">
        <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col">
                <Button variant="secondary">-1</Button>
            </div>
            <div className="grow">
            {
                pomodoroTimerType === 'work' && <>
                    <PomodoroWorkTimer action={ action } onFinish={ () => setPomodoroTimerType('break') }/>

                </>
            }
            {
                pomodoroTimerType === 'break' && <>
                    <PomodoroBreakTimer action={ action } onFinish={ () => setPomodoroTimerType('work') }/>

                </>
            }
            </div>
            <div className="flex flex-col">
                <Button variant="ghost" disabled>+1</Button>
            </div>
        </div>
        <div className="flex flex-row gap-2 justify-center">
            <StartButton action={ action } onStart={ () => setAction((action === 'pause') ? 'resume' : 'start') }
                         onStop={ () => setAction('pause') }/>
            <ResetButton action={ action } onReset={ () => setAction('reset') }/>
        </div>

    </div>;
};

export default Pomodoro;