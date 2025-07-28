import { FormattedTime } from "../../../../types/FormattedTime";
import { S_Display } from "../../../styled/display";

type TimeDisplayProps = {
    formattedTime: FormattedTime;
}

export default function TimeDisplay({ 
    formattedTime: { hoursStr, minutesStr, secondsStr }
}: TimeDisplayProps) {
    return (        
        <S_Display>
            <span>{hoursStr}</span>
            <span>:</span>
            <span>{minutesStr}</span>
            <span>:</span>
            <span>{secondsStr}</span>
        </S_Display>
    );
}