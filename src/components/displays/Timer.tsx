import { useState } from "react";
import TimerSelector from "./TimerSelector";

export default function Timer() {
    const [counter, setCounter] = useState(0);
    const [selecting, setSelecting] = useState(true);

    return (        

        <TimerSelector setCounter={setCounter} />

        // <DisplayStyled>
        //     {
        //         ((mode === "timer" && token !== undefined) || (mode !== "timer"))
        //         &&
        //         <>
        //             {Math.floor(displayTime/3600).toString().padStart(2, "0")}
        //             :
        //             {(Math.floor(displayTime/60) % 60).toString().padStart(2, "0")}
        //             :
        //             {(displayTime % 60).toString().padStart(2, "0")}
        //         </>
        //     }
        // </DisplayStyled>
    );
}