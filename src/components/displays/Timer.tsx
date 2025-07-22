import { useEffect, useRef, useState } from "react";
import TimerSelector from "./TimerSelector";
import TimeDisplay from "./TimeDisplay";

export default function Timer() {
    const [counter, setCounter] = useState(0);
    const [selecting, setSelecting] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const idRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        return () => {
            if(idRef.current)
                clearInterval(idRef.current);
        };
    }, []);

    const startTimer = () => {
        if(!idRef.current) {
            idRef.current = setInterval(() => {
                setCounter(prev => prev - 1)
            }, 1000);

            setIsRunning(true);
        }
    }

    const pauseTimer = () => {
        if(idRef.current) {
            clearInterval(idRef.current);
            idRef.current = undefined;

            setIsRunning(false);
        }
    }

    const resetTimer = () => {
        setCounter(0);
    }

    return (        
        <>
            {selecting && (
                <TimerSelector 
                    setCounter={setCounter}
                    setSelecting={setSelecting}
                    startTimer={startTimer}
                />
            )}

            {!selecting && (
                <TimeDisplay counter={counter} />
            )}
        </>

        // <S_Display>
        //     {
        //         ((mode === "timer" && token !== undefined) || (mode !== "timer"))
        //         &&
        //         <>
        //             {Math.floor(displayTime/3600).toString().padStart(2, "0")}
        //             :
        //             {(Math.floor(displayTime/60) % 60).toString().padStart(2, "0")}
        //             :
        //             {(displayTime % 60).toString().padStart(2, "0")}
        //         </>
        //     }
        // </S_Display>
    );
}