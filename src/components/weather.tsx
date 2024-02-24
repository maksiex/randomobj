import React from "react";

interface IWeather {
    weather: string;
};
export const Weather = ({weather}: IWeather) => {
    return (
        <div>
            {weather}
        </div>
    )
}