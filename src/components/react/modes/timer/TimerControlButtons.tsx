import { S_ControlButton } from "../../../styled/controlButton";
import { S_ControlButtonsContainer } from "../../../styled/controlButtonsContainer";

type TimerControlButtonsProps = {
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    counter: number;
    isRunning: boolean;
}

export default function TimerControlButtons({ 
    startTimer, 
    pauseTimer, 
    resetTimer, 
    counter,
    isRunning,
}: TimerControlButtonsProps) {
    return (      
        <S_ControlButtonsContainer>
            {isRunning ? (
                <S_ControlButton 
                    disabled={!isRunning} 
                    onClick={pauseTimer}
                    $variant="pause"
                >
                    Pause
                </S_ControlButton>
            ) : (
                <S_ControlButton 
                    disabled={isRunning} 
                    onClick={startTimer}
                    $variant="start"
                >
                    Resume
                </S_ControlButton>
            )}

            <S_ControlButton 
                onClick={resetTimer}
                disabled={!isRunning && counter === 0}
                $variant="reset"
            >
                Reset
            </S_ControlButton>
        </S_ControlButtonsContainer>
    );
}