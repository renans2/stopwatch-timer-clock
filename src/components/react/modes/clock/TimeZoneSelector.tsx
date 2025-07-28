import { Dispatch, SetStateAction } from "react";
import { CITY_TIME_ZONES } from "../../../../constants/cityTimeZones";
import { City } from "../../../../types/City";
import { S_CitySelect } from "../../../styled/citySelect";
import { S_CityLabel } from "../../../styled/cityLabel";

type TimeZoneSelectorProps = {
    city: "yours" | City,
    setCity: Dispatch<SetStateAction<"yours" | City>>,
}

export default function TimeZoneSelector({ 
    city, 
    setCity, 
}: TimeZoneSelectorProps) {

    return (
        <S_CityLabel>
            <span>Time Zone:</span> 

            <S_CitySelect
                value={city}
                onChange={(e) => setCity(e.target.value as "yours" | City)}
            >
                <option value={"yours"}>Yours</option>

                {Object.keys(CITY_TIME_ZONES).sort((a, b) => a.localeCompare(b)).map((city, i) => (
                    <option key={i} value={city}>{city}</option>
                ))}
            </S_CitySelect>
        </S_CityLabel>
    );
}