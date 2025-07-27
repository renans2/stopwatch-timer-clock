import { useEffect, useRef } from "react";
import TimeDisplay from "./TimeDisplay";
import useTimeZone from "../../../hooks/useTimeZone";
import TimeZoneSelector from "../TimeZoneSelector";
import { S_ModeContainer } from "../../styled/modeContainer";

type ClockProps = {
    show: boolean,
}

export default function Clock({ show }: ClockProps) {
    const { city, setCity, counter, setCounter } = useTimeZone();
    const idRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        idRef.current = setInterval(() => {
            setCounter(prev => {
                if (prev + 1 === 24 * 3600)
                    return 0

                return prev + 1;
            })
        }, 1000);

        return () => {
            clearInterval(idRef.current);
        };
    }, []);

    return (
        <S_ModeContainer $show={show}>
            <TimeZoneSelector 
                city={city} 
                setCity={setCity} 
            />
            <TimeDisplay counter={counter} />
        </S_ModeContainer>
    );
}