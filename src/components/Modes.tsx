import { useAppContextHook } from "../context/AppContext";
import { ModesStyled, ModeButtonStyled } from "./StyledComponents";

export default function Modes() {
    const { 
        mode, 
        changeToStopwatch, 
        changeToTimer, 
        changeToClock 
    } = useAppContextHook();

    return (
        <ModesStyled>
            <ModeButtonStyled 
                onClick={changeToClock} 
                disabled={mode === "clock"}
            >
                Clock
            </ModeButtonStyled>

            <ModeButtonStyled 
                onClick={changeToStopwatch} 
                disabled={mode === "stopwatch"}
            >
                Stopwatch
            </ModeButtonStyled>
            
            <ModeButtonStyled 
                onClick={changeToTimer} 
                disabled={mode === "timer"}
            >
                Timer
            </ModeButtonStyled>
        </ModesStyled>
    );
}