import { Dispatch, SetStateAction } from "react";
import { Mode } from "../../App";
import { S_ModeButton } from "../styled/modeButton";
import { S_ModeButtonContainer } from "../styled/modeButtonsContainer";
import ToggleThemeButton from "./ToggleThemeButton";

type ModesProps = {
    mode: Mode;
    isDarkTheme: boolean;
    setMode: Dispatch<SetStateAction<Mode>>;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export default function Modes({ 
    mode, 
    isDarkTheme,
    setMode,
    setIsDarkTheme,
}: ModesProps) {
    return (
        <>
            <ToggleThemeButton 
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme} />
        
            <S_ModeButtonContainer>
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
            </S_ModeButtonContainer>
        </>
    );
}