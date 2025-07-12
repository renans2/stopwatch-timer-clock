// import { useAppContextHook } from "../../context/AppContext";
// import { DisplayStyled } from "../StyledComponents";
import StopwatchControlButtons from "../StopwatchControlButtons";
import DefaultTimeDisplay from "./DefaultTimeDisplay";

export default function StopwatchDisplay() {
    // const { mode, 
    //         token,
    //         displayTime
    // } = useAppContextHook();

    return (    
        <>
            <StopwatchControlButtons />   
            <DefaultTimeDisplay />
        </> 
    );
}