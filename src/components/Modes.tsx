import { Clock, Hourglass, Timer } from "lucide-react";
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
            <button onClick={changeToClock} 
                    disabled={mode === "clock"}><Clock /></button>

            <button onClick={changeToStopwatch} 
                    disabled={mode === "stopwatch"}><Timer /></button>
            
            <button onClick={changeToTimer} 
                    disabled={mode === "timer"}><Hourglass /></button>
        </ModesStyled>
    );
}