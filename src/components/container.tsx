import React from "react";
import { Button } from "./button";
import { Weather } from "./weather";

export const Container = () => {
    return (
        <div className={'container'}>
            <Weather weather={'+4 C'}/>
            <Button />
        </div>
    )
}
