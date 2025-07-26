import { useEffect, useRef, useState } from "react";
import TimeDisplay from "./TimeDisplay";

export default function Clock() {
    const [counter, setCounter] = useState(0);
    const idRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const time = new Date();
        const timeInSeconds = 3600 * time.getHours() + 60 * time.getMinutes() + time.getSeconds();
    
        setCounter(timeInSeconds);

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
        <TimeDisplay counter={counter} />
    );
}