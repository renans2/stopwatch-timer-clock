import { useAppContextHook } from "../context/AppContext";
import { ControlButtonsContainer, ControlButtonStyled } from "./StyledComponents";

export default function StopwatchControlButtons() {
    const { toggleStopwatch,
            running,
            resetStopwatch
    } = useAppContextHook();

    return (      
        <ControlButtonsContainer>
            <ControlButtonStyled 
                disabled={!running} 
                onClick={toggleStopwatch}
                $variant="pause"
            >
                Pause
            </ControlButtonStyled>
            
            <ControlButtonStyled 
                disabled={running} 
                onClick={toggleStopwatch}
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