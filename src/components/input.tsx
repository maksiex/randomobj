import React, { useState } from "react";
import { Button } from "./button";
import { postCity } from "./utils";
import { weatherUrl } from "./constants";

export const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        postCity(inputValue, weatherUrl);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <Button onClick={handleSubmit} title={'Submit'} />
        </div>
    )
}