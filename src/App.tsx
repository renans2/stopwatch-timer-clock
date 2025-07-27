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
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
    }, []);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle />
            <S_App>
                <Modes 
                    mode={mode} 
                    setMode={setMode} 
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme} 
                />

                <Clock     show={mode === "clock"} />
                <Stopwatch show={mode === "stopwatch"}/>
                <Timer     show={mode === "timer"}/>

                <MadeWithLove />
            </S_App>
        </ThemeProvider>
    );
}

export default App
