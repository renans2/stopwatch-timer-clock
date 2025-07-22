import { S_ControlButton } from "../styled/controlButton";
import { S_ControlButtonsContainer } from "../styled/controlButtonsContainer";

type StopwatchControlButtonsProps = {
    startStopwatch: () => void;
    pauseStopwatch: () => void;
    resetStopwatch: () => void;
    isRunning: boolean;
}

export default function StopwatchControlButtons({ 
    startStopwatch, 
    pauseStopwatch, 
    resetStopwatch, 
    isRunning 
}: StopwatchControlButtonsProps) {
    return (      
        <S_ControlButtonsContainer>
            <S_ControlButton 
                disabled={!isRunning} 
                onClick={pauseStopwatch}
                $variant="pause"
            >
                Pause
            </S_ControlButton>
            
            <S_ControlButton 
                disabled={isRunning} 
                onClick={startStopwatch}
                $variant="start"
            >
                Start
            </S_ControlButton>

            <S_ControlButton 
                onClick={resetStopwatch}
                $variant="reset"
            >
                Reset
            </S_ControlButton>
        </S_ControlButtonsContainer>
    );
}