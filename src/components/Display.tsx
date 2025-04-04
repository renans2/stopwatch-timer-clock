import { useAppContextHook } from "../context/AppContext";
import { DisplayStyled } from "./StyledComponents";

export default function Display() {
    const { mode, 
            token,
            stopwatch,
            timer,
            currentTime
    } = useAppContextHook();
    
    const displayVal = mode === "clock"
                             ? currentTime
                             : mode === "stopwatch"
                                     ? stopwatch
                                     : timer;

    return (        
        <DisplayStyled>
            {
                ((mode === "timer" && token !== undefined) || (mode !== "timer"))
                &&
                <span>
                    {Math.floor(displayVal/3600).toString().padStart(2, "0")}
                    :
                    {(Math.floor(displayVal/60) % 60).toString().padStart(2, "0")}
                    :
                    {(displayVal % 60).toString().padStart(2, "0")}
                </span>
            }
        </DisplayStyled>
    );
}