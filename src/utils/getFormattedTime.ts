import { FormattedTime } from "../types/FormattedTime";

export function getFormattedTime(counter: number): FormattedTime {
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor(counter / 60) % 60;
    const seconds = counter % 60;

    return  {
        hours,
        minutes,
        seconds,
        hoursStr: hours.toString().padStart(2, '0'),
        minutesStr: minutes.toString().padStart(2, '0'),
        secondsStr: seconds.toString().padStart(2, '0'),
    }
}