import { ControlButtonsContainer, ControlButtonStyled } from "./StyledComponents";

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
        <ControlButtonsContainer>
            <ControlButtonStyled 
                disabled={!isRunning} 
                onClick={pauseStopwatch}
                $variant="pause"
            >
                Pause
            </ControlButtonStyled>
            
            <ControlButtonStyled 
                disabled={isRunning} 
                onClick={startStopwatch}
                $variant="start"
            >
                Start
            </ControlButtonStyled>

            <ControlButtonStyled 
                onClick={resetStopwatch}
                $variant="reset"
            >
                Reset
            </ControlButtonStyled>
        </ControlButtonsContainer>
    );
}