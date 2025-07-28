import { S_TimerSelectorDisplay } from "../../../styled/timerSelectorDisplay";

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
        <S_TimerSelectorDisplay>
            <span>{hours.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{minutes.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, "0")}</span>
        </S_TimerSelectorDisplay>
    );
}