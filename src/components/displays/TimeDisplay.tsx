import { S_Display } from "../StyledComponents";

type DefaultTimeDisplayProps = {
    counter: number;
}

export default function TimeDisplay({ counter }: DefaultTimeDisplayProps) {
    return (        
        <S_Display>
            {Math.floor(counter/3600).toString().padStart(2, "0")}
            :
            {(Math.floor(counter/60) % 60).toString().padStart(2, "0")}
            :
            {(counter % 60).toString().padStart(2, "0")}
        </S_Display>
    );
}