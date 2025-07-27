import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components";
import Modes from "./components/react/Modes";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";
import Clock from "./components/react/displays/Clock";
import Stopwatch from "./components/react/displays/Stopwatch";
import Timer from "./components/react/displays/Timer";
import { S_App } from "./components/styled/app";
import { AnimatePresence } from "motion/react";
import { S_ModeContainer } from "./components/styled/modeContainer";
import MadeWithLove from "./components/react/MadeWithLove";

export type Mode = "stopwatch" | "timer" | "clock";

export const order: Record<Mode, number> = {
    clock: 0,
    stopwatch: 1,
    timer: 2,
}

function App() {
    // const [running, setRunning] = useState(false);
    const [mode, setMode] = useState<Mode>("clock");
    const [prevMode, setPrevMode] = useState<Mode>("clock");
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    const direction = order[mode] > order[prevMode] ? 1 : -1;

    const variants = {
        initial: (dir: number) => ({
            x: dir * 1000,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir * -1000,
            opacity: 0,
        }),
    };

    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
    }, []);

    const renderModeDisplay = () => {
        switch (mode) {
            case "clock":
                return <Clock />;

            case "stopwatch":
                return <Stopwatch />;

            case "timer":
                return <Timer />;

            default:
                return null;
        }
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle />
            <S_App>
                <Modes 
                    mode={mode} 
                    setMode={setMode} 
                    setPrevMode={setPrevMode}
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme} 
                />

                <AnimatePresence 
                    mode="popLayout"
                    custom={direction}
                >
                    <S_ModeContainer
                        key={mode}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                    >
                        {renderModeDisplay()}
                    </S_ModeContainer>
                </AnimatePresence>

                <MadeWithLove />
            </S_App>
        </ThemeProvider>
    );
}

export default App
