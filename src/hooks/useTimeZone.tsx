import { useEffect, useState } from "react"
import { TimeZoneResponse } from "../types/TimeZoneResponse";
import { City } from "../types/City";
import { CITY_TIME_ZONES } from "../constants/cityTimeZones";

const BASE_URL = "https://timeapi.io/api/time/current/zone?timeZone=";

export default function useTimeZone() {
    const [city, setCity] = useState<"yours" | City>("yours");
    const [counter, setCounter] = useState<number>(0);

    const fetchTimeZone = async () => {
        if (city === "yours") {
            const time = new Date();
            const timeInSeconds = 3600 * time.getHours() + 60 * time.getMinutes() + time.getSeconds();
            
            setCounter(timeInSeconds);
        } else {
            const response = await fetch(`${BASE_URL}${CITY_TIME_ZONES[city]}`);
            const data: TimeZoneResponse = await response.json();
    
            setCounter(3600 * data.hour + 60 * data.minute + data.seconds);
        }
    }

    useEffect(() => {
        fetchTimeZone();
    }, [city])

    return { 
        city,
        setCity, 
        counter,
        setCounter,
    };
}