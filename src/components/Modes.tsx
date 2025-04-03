import { useAppContextHook } from "../context/AppContext";
import { ModesStyled } from "./StyledComponents";

export default function Modes() {
    const { mode, 
            changeToStopwatch, 
            changeToTimer, 
            changeToClock 
    } = useAppContextHook();

    return (
        <ModesStyled>
            <button onClick={changeToStopwatch} 
                    disabled={mode === "stopwatch"}>Stopwatch</button>
            
            <button onClick={changeToTimer} 
                    disabled={mode === "timer"}>Timer</button>
            
            <button onClick={changeToClock} 
                    disabled={mode === "clock"}>Clock</button>
        </ModesStyled>
    );
}