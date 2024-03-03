import React from "react";

interface IText {
    text: string;
}

export const Text = ({ text }:IText) => {
    return (
        <div>
            {text}
        </div>
    )
};
