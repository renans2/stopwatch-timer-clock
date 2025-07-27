import { Dispatch, SetStateAction } from "react";
import { Mode } from "../../App";
import { S_ModeButton } from "../styled/modeButton";
import { S_ModeButtonContainer } from "../styled/modeButtonsContainer";
import ToggleThemeButton from "./ToggleThemeButton";

type ModesProps = {
    mode: Mode;
    setMode: Dispatch<SetStateAction<Mode>>;
    setPrevMode: Dispatch<SetStateAction<Mode>>;
    isDarkTheme: boolean;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export default function Modes({ 
    mode, 
    setMode,
    setPrevMode,
    isDarkTheme,
    setIsDarkTheme,
}: ModesProps) {

    const handleChangeMode = (newMode: Mode) => {
        if (newMode !== mode) {
            setPrevMode(mode);
            setMode(newMode);
        }
    };

    return (
        <>
            <ToggleThemeButton 
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme} />
        
            <S_ModeButtonContainer>
                <S_ModeButton 
                    onClick={() => handleChangeMode("clock")} 
                    disabled={mode === "clock"}
                >
                    Clock
                </S_ModeButton>

                <S_ModeButton 
                    onClick={() => handleChangeMode("stopwatch")} 
                    disabled={mode === "stopwatch"}
                >
                    Stopwatch
                </S_ModeButton>
                
                <S_ModeButton 
                    onClick={() => handleChangeMode("timer")} 
                    disabled={mode === "timer"}
                >
                    Timer
                </S_ModeButton>
            </S_ModeButtonContainer>
        </>
    );
}