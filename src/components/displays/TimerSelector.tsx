import { Dispatch, SetStateAction, useState } from "react";
import TimerSelectorDisplay from "./TimerSelectorDisplay";
import { TimerSelectorButton, TimerSelectorButtonsContainer } from "../StyledComponents";
import { Minus, Plus } from "lucide-react";

type InputAction = "+" | "-";

type TimerSelectorProps = {
    setCounter: Dispatch<SetStateAction<number>>,
    setSelecting: Dispatch<SetStateAction<boolean>>,
    startTimer: () => void,
}

export default function TimerSelector({
    setCounter,
    setSelecting,
    startTimer,
}: TimerSelectorProps) {
    const [inputSec, setInputSec] = useState(0);
    const [inputMin, setInputMin] = useState(0);
    const [inputHours, setInputHours] = useState(0);

    const handleStartTimer = () => {
        setCounter(
            inputHours * 60 * 60 +
            inputMin * 60 +
            inputSec
        );
        setSelecting(false);
        startTimer();
    }

    const changeInputSeconds = (action: InputAction) => {
        if(action === "+") {
            setInputSec(prev => (prev + 1) % 60);
        } else {
            setInputSec(prev => {
                if(prev === 0) 
                    return 59;
                else 
                    return prev - 1;
            });
        }
    }

    const changeInputMinutes = (action: InputAction) => {
        if(action === "+") {
            setInputMin(prev => (prev + 1) % 60);
        } else {
            setInputMin(prev => {
                if(prev === 0) 
                    return 59;
                else 
                    return prev - 1;
            });
        }
    }

    const changeInputHours = (action: InputAction) => {
        if(action === "+") {
            setInputHours(prev => prev + 1);
        } else {
            setInputHours(prev => {
                if(prev === 0)
                    return 0;
                else 
                    return prev - 1;
            });
        }
    }

    return (        
        <>
            <TimerSelectorButtonsContainer>
                <TimerSelectorButton onClick={() => changeInputHours("+")}><Plus size={64} /></TimerSelectorButton>
                <TimerSelectorButton onClick={() => changeInputMinutes("+")}><Plus size={64} /></TimerSelectorButton>
                <TimerSelectorButton onClick={() => changeInputSeconds("+")}><Plus size={64} /></TimerSelectorButton>
            </TimerSelectorButtonsContainer>

            <TimerSelectorDisplay 
                seconds={inputSec} 
                minutes={inputMin} 
                hours={inputHours}
            />

            <TimerSelectorButtonsContainer>
                <TimerSelectorButton onClick={() => changeInputHours("-")} disabled={inputHours === 0}><Minus size={64} /></TimerSelectorButton>
                <TimerSelectorButton onClick={() => changeInputMinutes("-")}><Minus size={64} /></TimerSelectorButton>
                <TimerSelectorButton onClick={() => changeInputSeconds("-")}><Minus size={64} /></TimerSelectorButton>
            </TimerSelectorButtonsContainer>

            <button onClick={handleStartTimer}>start timer</button>
        </>
    );
}