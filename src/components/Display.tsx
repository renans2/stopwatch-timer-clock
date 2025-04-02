import { useAppContextHook } from "../context/AppContext";

export default function Display() {
    const { mode, 
            token,
            stopwatch,
            timer,
            currentTime
    } = useAppContextHook();
    
    return (
        <>
            {
                mode === "clock" 
                &&
                <span>
                    {currentTime.getHours().toString().padStart(2, "0")}
                    :
                    {currentTime.getMinutes().toString().padStart(2, "0")}
                    :
                    {currentTime.getSeconds().toString().padStart(2, "0")}
                </span>
            }

            {
                mode === "stopwatch" 
                &&
                <span>
                    {Math.floor(stopwatch/3600).toString().padStart(2, "0")}
                    :
                    {(Math.floor(stopwatch/60) % 60).toString().padStart(2, "0")}
                    :
                    {(stopwatch % 60).toString().padStart(2, "0")}
                </span>
            }

            {
                mode === "timer" 
                && 
                token !== undefined
                &&
                <span>
                    {Math.floor(timer/3600).toString().padStart(2, "0")}
                    :
                    {(Math.floor(timer/60) % 60).toString().padStart(2, "0")}
                    :
                    {(timer % 60).toString().padStart(2, "0")}
                </span>
            }
        </>
    );
}