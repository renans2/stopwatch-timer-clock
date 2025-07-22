import { S_ControlButtonsContainer, S_ControlButton } from "./StyledComponents";

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