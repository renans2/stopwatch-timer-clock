import { useEffect, useRef } from "react";
import TimeDisplay from "./TimeDisplay";
import useTimeZone from "../../../hooks/useTimeZone";
import TimeZoneSelector from "../TimeZoneSelector";

export default function Clock() {
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
        <>
            <TimeZoneSelector 
                city={city} 
                setCity={setCity} 
            />
            <TimeDisplay counter={counter} />
        </>
    );
}