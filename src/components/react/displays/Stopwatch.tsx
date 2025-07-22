import { useEffect, useRef, useState } from "react";
import StopwatchControlButtons from "../StopwatchControlButtons";
import TimeDisplay from "./TimeDisplay";
import { Checkpoint } from "../../../types/Checkpoint";
import Checkpoints from "../Checkpoints";

export default function Stopwatch() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const idRef = useRef<number | undefined>(undefined);
    const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([]);

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

    const handleAddCheckpoint = () => {
        setCheckpoints(prev => {
            const copy = [...prev];
            copy.unshift({
                id: prev.length + 1,
                hours: Math.floor(counter/3600),
                minutes: Math.floor(counter/60) % 60,
                seconds: counter % 60, 
            });
            return copy;
        });
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
            <button disabled={!isRunning} onClick={handleAddCheckpoint}>Checkpoint</button>
            <Checkpoints checkpoints={checkpoints} />
        </> 
    );
}