import { getContext, Mode } from "../App";

export default function Modes({ mode }: {mode: Mode}) {
    const { changeToStopwatch, changeToTimer, changeToClock } = getContext();

    return (
        <>
            { mode !== "stopwatch" && <button onClick={changeToStopwatch}>stopwatch</button> }
            { mode !== "timer" && <button onClick={changeToTimer}>timer</button> }
            { mode !== "clock" && <button onClick={changeToClock}>clock</button> }
        </>
    );
}