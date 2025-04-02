import { createContext, useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { useAppContext } from "./context/AppContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20%;
    background-color: gray;
    text-align: center;
`;

function App() {
    const {changeToClock} = useAppContext();

    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
        changeToClock();
    }, []);

    return (
        <Container>
            <Modes />

            {
                mode === "clock" 
                &&
                <span>
                    {currentTime.getHours().toString().padStart(2, "0")}
                    :
                    {currentTime.getMinutes().toString().padStart(2, "0")}
                    :
                    {currentTime.getSeconds().toString().padStart(2, "0")}
                </span>
            }

            {
                mode === "stopwatch" 
                &&
                <>
                    <span>
                        {Math.floor(stopwatch/3600).toString().padStart(2, "0")}
                        :
                        {(Math.floor(stopwatch/60) % 60).toString().padStart(2, "0")}
                        :
                        {(stopwatch % 60).toString().padStart(2, "0")}
                    </span>
                    <button onClick={toggleStopwatch}>
                        {
                            token === undefined
                            ? "Start"
                            : "Stop"
                        }
                    </button>
                    <button onClick={resetStopwatch}>Reset</button>
                </>
            }

            {
                mode === "timer" 
                &&
                <>
                    {
                        token === undefined 
                        ?
                        <>
                            <input value={timerHours.toString()} onChange={handleChangeTimer} name="hours" type="number" min="0" max="99" />
                            <input value={timerMinutes.toString()} onChange={handleChangeTimer} name="minutes" type="number" min="0" max="59" />
                            <input value={timerSeconds.toString()} onChange={handleChangeTimer} name="seconds" type="number" min="0" max="59" />
                        </>
                        :
                        <span>
                            {Math.floor(timer/3600).toString().padStart(2, "0")}
                            :
                            {(Math.floor(timer/60) % 60).toString().padStart(2, "0")}
                            :
                            {(timer % 60).toString().padStart(2, "0")}
                        </span>
                    }
                    <button onClick={toggleTimer}>
                        {
                            token === undefined
                            ? "Start"
                            : "Stop"
                        }
                    </button>
                </>
            }
        </Container>
  )
}

export default App
