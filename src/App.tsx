import { useEffect } from "react"
import Modes from "./components/Modes";
import { AppStyled } from "./components/StyledComponents";
import { useAppContextHook } from "./context/AppContext";
import StopwatchDisplay from "./components/displays/StopwatchDisplay";
import TimerDisplay from "./components/displays/TimerDisplay";
import DefaultTimeDisplay from "./components/displays/DefaultTimeDisplay";

function App() {
    const { mode } = useAppContextHook();

    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
    }, []);

    const renderModeDisplay = () => {
        switch (mode) {
            case "clock":
                return <DefaultTimeDisplay />;
            case "stopwatch":
                return <StopwatchDisplay />;
            case "timer":
                return <TimerDisplay />;
            default:
                return null;
        }
    };

    return (
        <AppStyled>
            <Modes />
            {renderModeDisplay()}
        </AppStyled>
    );
}

export default App
