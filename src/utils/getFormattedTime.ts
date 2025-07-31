import { FormattedTimeString } from "../types/FormattedTimeString";

export function getFormattedTime(counter: number): FormattedTimeString {
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor(counter / 60) % 60;
    const seconds = counter % 60;

    return  {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
    }
}