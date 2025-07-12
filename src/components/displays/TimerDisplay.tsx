import { useAppContextHook } from "../../context/AppContext";
import { DisplayStyled } from "../StyledComponents";

export default function TimerDisplay() {
    const { mode, 
            token,
            displayTime
    } = useAppContextHook();

    return (        
        <DisplayStyled>
            {
                ((mode === "timer" && token !== undefined) || (mode !== "timer"))
                &&
                <>
                    {Math.floor(displayTime/3600).toString().padStart(2, "0")}
                    :
                    {(Math.floor(displayTime/60) % 60).toString().padStart(2, "0")}
                    :
                    {(displayTime % 60).toString().padStart(2, "0")}
                </>
            }
        </DisplayStyled>
    );
}