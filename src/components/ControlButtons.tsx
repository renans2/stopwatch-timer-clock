import { RotateCcw } from "lucide-react";
import { useAppContextHook } from "../context/AppContext";
import { ControlButtonsStyled, TimerInputContainer } from "./StyledComponents";
import ToggleButton from "./ToggleButton";

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
                <ControlButtonsStyled>
                    <ToggleButton toggleFunction={toggleStopwatch} />
                    <button onClick={resetStopwatch}><RotateCcw /></button>
                </ControlButtonsStyled>
            }

            {
                mode === "timer" 
                &&
                <>
                    {
                        token === undefined 
                        &&
                        <TimerInputContainer>
                            <label htmlFor="hours">H: </label>
                            <input id="hours" value={timerHours.toString()} onChange={handleChangeTimer} name="hours" type="number" min="0" max="99" />
                            <label htmlFor="minutes">M: </label>
                            <input id="minutes" value={timerMinutes.toString()} onChange={handleChangeTimer} name="minutes" type="number" min="0" max="59" />
                            <label htmlFor="seconds">S: </label>
                            <input id="seconds" value={timerSeconds.toString()} onChange={handleChangeTimer} name="seconds" type="number" min="0" max="59" />
                        </TimerInputContainer>
                    }
                    <ToggleButton toggleFunction={toggleTimer} />
                </>
            }
        </>
    );
}