import { Dispatch, SetStateAction } from "react";
import { Mode } from "../App";
import { ModesStyled, ModeButtonStyled } from "./StyledComponents";
import { Moon, Sun } from "lucide-react";

type ModesProps = {
    mode: string;
    setMode: Dispatch<SetStateAction<Mode>>;
    isDarkTheme: boolean;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export default function Modes({ 
    mode, 
    setMode,
    isDarkTheme,
    setIsDarkTheme,
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

            {/* <ModeButtonStyled 
                onClick={() => setIsDarkTheme(prev => !prev)}
            >
                {isDarkTheme ? <Sun /> : <Moon />}
            </ModeButtonStyled> */}
        </ModesStyled>
    );
}