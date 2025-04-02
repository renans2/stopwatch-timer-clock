import { useEffect } from "react"
import styled from "styled-components";
import { useAppContextHook } from "./context/AppContext";
import Modes from "./components/Modes";
import Display from "./components/Display";
import ControlButtons from "./components/ControlButtons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20%;
    background-color: gray;
    text-align: center;
`;

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
