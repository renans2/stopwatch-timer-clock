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

export type Mode = "stopwatch" | "timer" | "clock";

function App() {
    const [mode, setMode] = useState<Mode>("clock");
    // const [running, setRunning] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

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
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme} 
                />
                {renderModeDisplay()}
            </S_App>
        </ThemeProvider>
    );
}

export default App
