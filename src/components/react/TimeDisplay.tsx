import { FormattedTimeString } from "../../types/FormattedTimeString";
import { S_Display } from "../styled/display";

type TimeDisplayProps = {
    formattedTime: FormattedTimeString;
    isRunning?: boolean;
}

export default function TimeDisplay({ 
    formattedTime: { hours, minutes, seconds },
    isRunning,
}: TimeDisplayProps) {
    return (        
        <S_Display $isRunning={isRunning}>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </S_Display>
    );
}