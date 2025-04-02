import { useAppContextHook } from "../context/AppContext";

export default function Modes() {
    const { mode, 
            changeToStopwatch, 
            changeToTimer, 
            changeToClock 
    } = useAppContextHook();

    return (
        <>
            { mode !== "stopwatch" && <button onClick={changeToStopwatch}>stopwatch</button> }
            { mode !== "timer" && <button onClick={changeToTimer}>timer</button> }
            { mode !== "clock" && <button onClick={changeToClock}>clock</button> }
        </>
    );
}