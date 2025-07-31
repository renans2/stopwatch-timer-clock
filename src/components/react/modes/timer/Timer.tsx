import { useEffect, useRef, useState } from "react";
import TimerSelector from "./TimerSelector";
import TimeDisplay from "../../TimeDisplay";
import TimerControlButtons from "./TimerControlButtons";
import { S_ModeContainer } from "../../../styled/modeContainer";
import { getFormattedTime } from "../../../../utils/getFormattedTime";

type TimerProps = {
    show: boolean
}

export default function Timer({ show }: TimerProps) {
    const [counter, setCounter] = useState(0);
    const [selecting, setSelecting] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const idRef = useRef<number | undefined>(undefined);
    
    const formattedTime = getFormattedTime(counter);

    if (show) {
        document.title = `Timer: ${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`;
    }

    useEffect(() => {
        return () => {
            if(idRef.current) clearInterval(idRef.current);
        };
    }, []);

    const startTimer = () => {
        if(!idRef.current) {
            idRef.current = setInterval(() => {
                setCounter(prev => {
                    if (prev === 1) {
                        resetTimer();
                        return 0;
                    } else {
                        return prev - 1;
                    }
                });
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
        pauseTimer();
        setSelecting(true);
    }

    return (      
        <S_ModeContainer $show={show}>
            <TimerSelector 
                setCounter={setCounter}
                selecting={selecting}
                setSelecting={setSelecting}
                startTimer={startTimer}
            />

            {!selecting && (
                <>
                    <TimerControlButtons
                        startTimer={startTimer}
                        pauseTimer={pauseTimer}
                        resetTimer={resetTimer}
                        counter={counter}
                        isRunning={isRunning}
                    />

                    <TimeDisplay
                        formattedTime={formattedTime}
                        isRunning={isRunning}
                    />
                </>
            )}
        </S_ModeContainer>
    );
}