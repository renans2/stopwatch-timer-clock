import { DisplayStyled } from "../StyledComponents";

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
        <DisplayStyled>
            {hours.toString().padStart(2, "0")}
            :
            {minutes.toString().padStart(2, "0")}
            :
            {seconds.toString().padStart(2, "0")}
        </DisplayStyled>
    );
}