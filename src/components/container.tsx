import React from "react";
import { Weather } from "./weather";
import { Input } from "./input";

export const Container = () => {
    return (
        <div className={'container'}>
            <Weather weather={'+4 C'}/>
            <Input />
        </div>
    )
}
