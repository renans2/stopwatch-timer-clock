import { Dispatch, SetStateAction, useEffect } from "react";
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

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme)
            setIsDarkTheme(savedTheme === "dark");
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

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