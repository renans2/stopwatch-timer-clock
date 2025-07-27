import { useEffect, useRef } from "react";
import TimeDisplay from "./TimeDisplay";
import useTimeZone from "../../../hooks/useTimeZone";
import TimeZoneSelector from "../TimeZoneSelector";
import { S_ModeContainer } from "../../styled/modeContainer";
import { Mode } from "../../../App";
import { getFormattedTime } from "../../../utils/getFormattedTime";

type ClockProps = {
    mode: Mode
}

export default function Clock({ mode }: ClockProps) {
    const { city, setCity, counter, setCounter, isFetching } = useTimeZone();
    const idRef = useRef<number | undefined>(undefined);

    const formattedTime = getFormattedTime(counter);
    const show = mode === "clock";

    if (show) {
        document.title = `Clock: ${formattedTime.hoursStr}:${formattedTime.minutesStr}:${formattedTime.secondsStr}`;
    }

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

            {isFetching ? (
                <h2 style={{color:"white"}}>Fetching...</h2>
            ) : (
                <TimeDisplay formattedTime={formattedTime} />
            )}
        </S_ModeContainer>
    );
}