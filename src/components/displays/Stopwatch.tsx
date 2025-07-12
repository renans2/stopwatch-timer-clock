import { useEffect, useRef, useState } from "react";
import StopwatchControlButtons from "../StopwatchControlButtons";
import TimeDisplay from "./TimeDisplay";

export default function Stopwatch() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const idRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        return () => {
            if(idRef.current)
                clearInterval(idRef.current);
        };
    }, []);

    const startStopwatch = () => {
        if(!idRef.current) {
            idRef.current = setInterval(() => {
                setCounter(prev => prev + 1)
            }, 1000);

            setIsRunning(true);
        }
    }

    const pauseStopwatch = () => {
        if(idRef.current) {
            clearInterval(idRef.current);
            idRef.current = undefined;

            setIsRunning(false);
        }
    }

    const resetStopwatch = () => {
        setCounter(0);
    }

    return (    
        <>
            <StopwatchControlButtons 
                startStopwatch={startStopwatch} 
                pauseStopwatch={pauseStopwatch} 
                resetStopwatch={resetStopwatch} 
                isRunning={isRunning}
            />
            <TimeDisplay counter={counter} />
        </> 
    );
}