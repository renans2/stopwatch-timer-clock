import { useEffect } from "react"
import { useAppContextHook } from "./context/AppContext";
import Modes from "./components/Modes";
import Display from "./components/Display";
import ControlButtons from "./components/ControlButtons";
import { Container } from "./components/StyledComponents";

function App() {
    const { changeToClock } = useAppContextHook();

    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
        changeToClock();
    }, []);

    return (
        <Container>
            <Modes />
            <Display />
            <ControlButtons />
        </Container>
  )
}

export default App
