import { S_Display } from "../../styled/display";

type DefaultTimeDisplayProps = {
    counter: number;
}

export default function TimeDisplay({ counter }: DefaultTimeDisplayProps) {
    return (        
        <S_Display>
            <span>{Math.floor(counter/3600).toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{(Math.floor(counter/60) % 60).toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{(counter % 60).toString().padStart(2, "0")}</span>
        </S_Display>
    );
}