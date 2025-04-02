import { useAppContextHook } from "../context/AppContext";

export default function ControlButtons() {
    const { mode,
            toggleStopwatch,
            token, 
            resetStopwatch,
            timerHours,
            timerMinutes,
            timerSeconds,
            handleChangeTimer,
            toggleTimer
    } = useAppContextHook()
    
    return (
        <>
            {
                mode === "stopwatch" 
                &&
                <>
                    <button onClick={toggleStopwatch}>
                        {
                            token === undefined
                            ? "Start"
                            : "Stop"
                        }
                    </button>
                    <button onClick={resetStopwatch}>Reset</button>
                </>
            }

            {
                mode === "timer" 
                &&
                <>
                    {
                        token === undefined 
                        &&
                        <>
                            <input value={timerHours.toString()} onChange={handleChangeTimer} name="hours" type="number" min="0" max="99" />
                            <input value={timerMinutes.toString()} onChange={handleChangeTimer} name="minutes" type="number" min="0" max="59" />
                            <input value={timerSeconds.toString()} onChange={handleChangeTimer} name="seconds" type="number" min="0" max="59" />
                        </>
                    }
                    <button onClick={toggleTimer}>
                        {
                            token === undefined
                            ? "Start"
                            : "Stop"
                        }
                    </button>
                </>
            }
        </>
    );
}