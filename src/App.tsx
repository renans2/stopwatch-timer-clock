import { useEffect } from "react"
import Modes from "./components/Modes";
import Display from "./components/Display";
import ControlButtons from "./components/ControlButtons";
import { Container } from "./components/StyledComponents";

function App() {
    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
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
