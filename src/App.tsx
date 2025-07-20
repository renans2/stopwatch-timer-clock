import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { AppStyled } from "./components/StyledComponents";
import Modes from "./components/Modes";
import DefaultTimeDisplay from "./components/displays/TimeDisplay";
import Stopwatch from "./components/displays/Stopwatch";
import Timer from "./components/displays/Timer";
import Clock from "./components/displays/Clock";
import GlobalStyle from "./styles/GlobalStyle";

export type Mode = "stopwatch" | "timer" | "clock";

function App() {
    const [mode, setMode] = useState<Mode>("clock");
    const [running, setRunning] = useState(false);

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
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppStyled>
                <Modes mode={mode} setMode={setMode} />
                {renderModeDisplay()}
            </AppStyled>
        </ThemeProvider>
    );
}

export default App
