import { useEffect, useState } from "react"

type Mode = "stopwatch" | "timer" | "clock";

function App() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [stopwatch, setStopwatch] = useState(0);
    const [timer, setTimer] = useState(0);
    const [token, setToken] = useState<any>(undefined);
    const [mode, setMode] = useState<Mode>();
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    useEffect(() => {
        document.title = "Stopwatch-Timer-Clock";
        changeToClock();
    }, []);

    const changeToClock = () => {
        setMode("clock");

        if(token !== undefined)
            clearToken();

        setCurrentTime(new Date());
        setClockInterval();
    }

    const changeToStopwatch = () => {
        setMode("stopwatch");

        if(token !== undefined)
            clearToken();

        setStopwatch(0);
    }

    const changeToTimer = () => {
        setMode("timer");

        if(token !== undefined)
            clearToken();
    }

    const toggleStopwatch = () => {
        token === undefined 
               ? setStopwatchInterval() 
               : clearToken();
    }

    const resetStopwatch = () => {
        setStopwatch(0);

        if(token !== undefined) {
            clearToken();
            setStopwatchInterval();
        }

    }

    const setClockInterval = () => {
        setToken(setInterval(() => setCurrentTime(new Date())));
    }

    const setStopwatchInterval = () => {
        setToken(setInterval(() => setStopwatch(p => p + 1), 1000));
    }

    const setTimerInterval = () => {
        setToken(setInterval(() =>  {
            console.log(timer);
            setTimer(p => p - 1);
        }, 1000));
    }

    const toggleTimer = () => {
        if(token === undefined ){
            setTimer(3600 * timerHours + 60 * timerMinutes + timerSeconds);
            setTimerInterval();
        } else {
            clearToken();   
        }
    }

    const clearToken = () => {
        clearInterval(token);
        setToken(undefined);
    }

    const handleChangeTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const inputValue = parseInt(e.target.value);
        console.log(inputValue);

        switch (inputName) {
            case "hours":
                setTimerHours(inputValue > 99 ? 99 : inputValue);
                break;
        
            case "minutes":
                setTimerMinutes(inputValue > 59 ? 59 : inputValue);
                break;

            case "seconds":
                setTimerSeconds(inputValue > 59 ? 59 : inputValue);
                break;
            
            default:
                break;
        }
    }

    return (
        <>
            { mode !== "stopwatch" && <button onClick={changeToStopwatch}>stopwatch</button> }
            { mode !== "timer" && <button onClick={changeToTimer}>timer</button> }
            { mode !== "clock" && <button onClick={changeToClock}>clock</button> }

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
        </>
  )
}

export default App
