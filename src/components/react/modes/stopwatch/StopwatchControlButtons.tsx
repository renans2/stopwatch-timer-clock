import { S_ControlButton } from "../../../styled/controlButton";
import { S_ControlButtonsContainer } from "../../../styled/controlButtonsContainer";

type StopwatchControlButtonsProps = {
    startStopwatch: () => void;
    pauseStopwatch: () => void;
    resetStopwatch: () => void;
    counter: number;
    isRunning: boolean;
}

export default function StopwatchControlButtons({ 
    startStopwatch, 
    pauseStopwatch, 
    resetStopwatch, 
    counter,
    isRunning,
}: StopwatchControlButtonsProps) {
    return (      
        <S_ControlButtonsContainer>
            {isRunning ? (
                <S_ControlButton 
                    disabled={!isRunning} 
                    onClick={pauseStopwatch}
                    $variant="pause"
                >
                    Pause
                </S_ControlButton>
            ) : (
                <S_ControlButton 
                    disabled={isRunning} 
                    onClick={startStopwatch}
                    $variant="start"
                >
                    {counter > 0 ? "Resume" : "Start"}
                </S_ControlButton>
            )}

            <S_ControlButton 
                onClick={resetStopwatch}
                disabled={!isRunning && counter === 0}
                $variant="reset"
            >
                Reset
            </S_ControlButton>
        </S_ControlButtonsContainer>
    );
}