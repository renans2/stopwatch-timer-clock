import { createContext, ReactNode, useContext, useState } from "react";

export type Mode = "stopwatch" | "timer" | "clock";

interface AppContextType {
    currentTime: Date;
    stopwatch: number;
    timer: number;
    token: number;
    mode: Mode;
    timerHours: number;
    timerMinutes: number;
    timerSeconds: number;
    changeToClock: () => void;
    changeToStopwatch: () => void;
    changeToTimer: () => void;
    toggleStopwatch: () => void;
    resetStopwatch: () => void;
    setClockInterval: () => void;
    setStopwatchInterval: () => void;
    setTimerInterval: () => void;
    clearToken: () => void;
    handleChangeTimer: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [stopwatch, setStopwatch] = useState(0);
    const [timer, setTimer] = useState(0);
    const [token, setToken] = useState<any>(undefined);
    const [mode, setMode] = useState<Mode>("clock");
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

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

    return(
        <AppContext.Provider value={{ currentTime,
                                      stopwatch,
                                      timer,
                                      token,
                                      mode,
                                      timerHours,
                                      timerMinutes,
                                      timerSeconds,
                                      changeToClock,
                                      changeToStopwatch,
                                      changeToTimer,
                                      toggleStopwatch,
                                      resetStopwatch,
                                      setClockInterval,
                                      setStopwatchInterval,
                                      setTimerInterval,
                                      clearToken,
                                      handleChangeTimer }}>
            {children}
        </AppContext.Provider>
    );
}
