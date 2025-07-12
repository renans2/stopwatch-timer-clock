import { Dispatch, SetStateAction } from "react";
import { Mode } from "../App";
import { ModesStyled, ModeButtonStyled } from "./StyledComponents";

type ModesProps = {
    mode: string;
    setMode: Dispatch<SetStateAction<Mode>>;
}

export default function Modes({ 
    mode, 
    setMode 
}: ModesProps) {
    return (
        <ModesStyled>
            <ModeButtonStyled 
                onClick={() => setMode("clock")} 
                disabled={mode === "clock"}
            >
                Clock
            </ModeButtonStyled>

            <ModeButtonStyled 
                onClick={() => setMode("stopwatch")} 
                disabled={mode === "stopwatch"}
            >
                Stopwatch
            </ModeButtonStyled>
            
            <ModeButtonStyled 
                onClick={() => setMode("timer")} 
                disabled={mode === "timer"}
            >
                Timer
            </ModeButtonStyled>
        </ModesStyled>
    );
}