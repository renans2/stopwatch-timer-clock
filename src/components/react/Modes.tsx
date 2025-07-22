import { Dispatch, SetStateAction } from "react";
import { Mode } from "../../App";
import { Moon, Sun } from "lucide-react";
import { S_ModeButton } from "../styled/modeButton";
import { S_Modes } from "../styled/modes";
import ToggleThemeButton from "./ToggleThemeButton";

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
        <S_Modes>
            <S_ModeButton 
                onClick={() => setMode("clock")} 
                disabled={mode === "clock"}
            >
                Clock
            </S_ModeButton>

            <S_ModeButton 
                onClick={() => setMode("stopwatch")} 
                disabled={mode === "stopwatch"}
            >
                Stopwatch
            </S_ModeButton>
            
            <S_ModeButton 
                onClick={() => setMode("timer")} 
                disabled={mode === "timer"}
            >
                Timer
            </S_ModeButton>

            <ToggleThemeButton 
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme} />
        </S_Modes>
    );
}