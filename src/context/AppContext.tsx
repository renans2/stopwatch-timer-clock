import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Mode = "stopwatch" | "timer" | "clock" | undefined;

interface AppContextType {
    displayTime: number;
    token: number | undefined;
    mode: Mode;
    timerHours: number;
    timerMinutes: number;
    timerSeconds: number;
    running: boolean;
    changeToClock: () => void;
    changeToStopwatch: () => void;
    changeToTimer: () => void;
    toggleStopwatch: () => void;
    resetStopwatch: () => void;
    setClockInterval: () => void;
    setStopwatchInterval: () => void;
    setTimerInterval: () => void;
    clearToken: () => void;
    toggleTimer: () => void;
    handleChangeTimer: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContextHook = () => {
    const context = useContext(AppContext);

    if(!context)
        throw new Error("Error");
        
    return context;
}

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [displayTime, setDisplayTime] = useState(0);
    const [token, setToken] = useState<number | undefined>(undefined);
    const [mode, setMode] = useState<Mode>(undefined);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        changeToClock();
    }, []);

    const changeToClock: () => void = () => {
        console.log("clock");
        
        setMode("clock");

        if(token !== undefined)
            clearToken();

        const time = new Date();
        const timeInSeconds = 3600 * time.getHours() + 
                              60 * time.getMinutes() + 
                              time.getSeconds();
        
        setDisplayTime(timeInSeconds);
        setClockInterval();
    }

    const changeToStopwatch = () => {
        console.log("stopwatch");

        setMode("stopwatch");

        if(token !== undefined)
            clearToken();

        setDisplayTime(0);
    }

    const changeToTimer = () => {
        console.log("timer");

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
        setDisplayTime(0);

        if(token !== undefined) {
            clearToken();
            setStopwatchInterval();
        }

    }

    const setClockInterval = () => {
        setToken(
            setInterval(() => {
                setDisplayTime(p => {
                    if (p + 1 === 24 * 3600)
                        return 0

                    return p + 1;
                });
            }, 1000)
        );
    }

    const setStopwatchInterval = () => {
        setToken(setInterval(() => setDisplayTime(p => p + 1), 1000));
        setRunning(true);
    }

    const setTimerInterval = () => {
        setToken(setInterval(() =>  {
            setDisplayTime(p => {
                if (p === 0) {
                    // clearToken();
                    // alert("Time is up!!!");
                    return 0;
                }

                return p - 1;
            });
            
        }, 1000));
    }

    const toggleTimer = () => {
        if(token === undefined ){
            setDisplayTime(3600 * timerHours + 60 * timerMinutes + timerSeconds);
            setTimerInterval();
        } else {
            clearToken();   
        }
    }

    const clearToken = () => {
        clearInterval(token);
        setToken(undefined);
        setRunning(false);
    }

    const handleChangeTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const inputValue = parseInt(e.target.value);

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
        <AppContext.Provider value={{ displayTime,
                                      token,
                                      mode,
                                      timerHours,
                                      timerMinutes,
                                      timerSeconds,
                                      running,
                                      changeToClock,
                                      changeToStopwatch,
                                      changeToTimer,
                                      toggleStopwatch,
                                      resetStopwatch,
                                      setClockInterval,
                                      setStopwatchInterval,
                                      setTimerInterval,
                                      toggleTimer,
                                      clearToken,
                                      handleChangeTimer }}>
            {children}
        </AppContext.Provider>
    );
}
