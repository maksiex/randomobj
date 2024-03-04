import React, { useState } from "react";
import { Button } from "./button";
import { postCity } from "./utils";
import { weatherUrl } from "./constants";
import { IWeatherData } from "./types";
import { Text } from "./Text";

export const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [weatherData, setWeatherData] = useState<IWeatherData>();
    const [isLoading, setIsLoading] = useState(false);
    const { main, wind, weather, error } = weatherData || {};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const weatherData =  await postCity(inputValue, weatherUrl);
            setWeatherData(weatherData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={'form-container'}>
            <div className={'form'}>
                <input className={'input'} type="text" value={inputValue} onChange={handleInputChange}/>
                <Button onClick={handleSubmit} title={'Get weather'}/>
            </div>
            {isLoading && <div className="loader"></div>}
            {weatherData && !error && !isLoading &&
                <div className={'data-container'}>
                    <Text text={`Temperature: ${main?.temp.toFixed(1)} °C`} />
                    <Text text={`Feels like: ${main?.feels_like.toFixed(1)} °C`} />
                    <Text text={`Wind speed: ${wind?.speed} m/s`} />
                    {weather?.map((el, index) => (
                        <Text key={index} text={el.description} />
                    ))}
                 </div>
            }
            {error && <div className={'error'}>
                <Text text={'Failed to receive data, check the correct city name and try again'} />
            </div>}
        </div>
    )
};
