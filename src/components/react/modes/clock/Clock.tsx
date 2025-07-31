import { useEffect, useRef } from "react";
import TimeDisplay from "../../TimeDisplay";
import useTimeZone from "../../../../hooks/useTimeZone";
import TimeZoneSelector from "./TimeZoneSelector";
import { S_ModeContainer } from "../../../styled/modeContainer";
import { getFormattedTime } from "../../../../utils/getFormattedTime";
import { S_FetchingText } from "../../../styled/fetchingText";

type ClockProps = {
    show: boolean;
}

export default function Clock({ show }: ClockProps) {
    const { 
        city, 
        counter, 
        isFetching,
        setCity, 
        setCounter, 
    } = useTimeZone();
    
    const idRef = useRef<number | undefined>(undefined);

    const formattedTime = getFormattedTime(counter);

    if (show) {
        document.title = `${city === "yours" ? "Clock" : city}: 
            ${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`;
    }

    useEffect(() => {
        idRef.current = setInterval(() => {
            setCounter(prev => {
                if (prev + 1 === 24 * 60 * 60) return 0;
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
                <S_FetchingText>Fetching...</S_FetchingText>
            ) : (
                <TimeDisplay formattedTime={formattedTime} />
            )}
        </S_ModeContainer>
    );
}