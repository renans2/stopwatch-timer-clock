import { FormattedTime } from "../../types/FormattedTime";
import { S_Display } from "../styled/display";

type TimeDisplayProps = {
    formattedTime: FormattedTime;
    isRunning?: boolean;
}

export default function TimeDisplay({ 
    formattedTime: { hoursStr, minutesStr, secondsStr },
    isRunning,
}: TimeDisplayProps) {
    return (        
        <S_Display $isRunning={isRunning}>
            <span>{hoursStr}</span>
            <span>:</span>
            <span>{minutesStr}</span>
            <span>:</span>
            <span>{secondsStr}</span>
        </S_Display>
    );
}