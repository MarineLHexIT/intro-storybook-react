import PomodoroTimer, { PomodoroTimerActions } from '@/components/pomodoro-timers/pomodoro-timer.tsx';

const DEFAULT_WORK_TIMER = 5 * 60;

interface PomodoroBreakTimerProps {
    action : PomodoroTimerActions;
    onFinish: () => void;
    initialTimer?: number;
    objectiveTimer?: number;
}

const PomodoroWorkTimer = ({
                               action,
                               onFinish,
                               initialTimer = 0,
                               objectiveTimer = DEFAULT_WORK_TIMER,
                           }: PomodoroBreakTimerProps) => {

    return <>
        <h2>Break time !</h2>
        <PomodoroTimer
            initialTimer={initialTimer}
            objectiveTimer={objectiveTimer}
            action={action}
            onFinish={onFinish}
        />
    </>
};

export default PomodoroWorkTimer;