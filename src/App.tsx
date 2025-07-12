import { useEffect, useState } from "react"
import Modes from "./components/Modes";
import { AppStyled } from "./components/StyledComponents";
import DefaultTimeDisplay from "./components/displays/TimeDisplay";
import Stopwatch from "./components/displays/Stopwatch";
import Timer from "./components/displays/Timer";
import Clock from "./components/displays/Clock";

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
        <AppStyled>
            <Modes mode={mode} setMode={setMode} />
            {renderModeDisplay()}
        </AppStyled>
    );
}

export default App
