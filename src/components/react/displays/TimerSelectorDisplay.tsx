import { S_Display } from "../../styled/display";

type TimerSelectorDisplayProps = {
    seconds: number;
    minutes: number;
    hours: number;
}

export default function TimerSelectorDisplay({
    seconds,
    minutes,
    hours,
}: TimerSelectorDisplayProps) {
    return (        
        <S_Display>
            {hours.toString().padStart(2, "0")}
            :
            {minutes.toString().padStart(2, "0")}
            :
            {seconds.toString().padStart(2, "0")}
        </S_Display>
    );
}