import { Dispatch, SetStateAction } from "react";
import { S_ToggleThemeButton } from "../styled/toggleThemeButton";
import { Moon, Sun } from "lucide-react";

type ToggleThemeButtonProps = {
    isDarkTheme: boolean;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export default function ToggleThemeButton({ 
    isDarkTheme,
    setIsDarkTheme,
}: ToggleThemeButtonProps) {
    return (
        <S_ToggleThemeButton onClick={() => setIsDarkTheme(prev => !prev)}>
            {isDarkTheme ? (
                <>
                    <span>Dark</span>
                    <Moon 
                        size={30} 
                        strokeWidth={2} 
                    />
                    
                </>
            ) : (
                <>
                    <span>Light</span>
                    <Sun 
                        size={30} 
                        strokeWidth={2} 
                    />
                </>
            )}
        </S_ToggleThemeButton>
    )
}