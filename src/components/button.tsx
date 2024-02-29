import React from "react";

interface IButton {
    onClick: () => void;
    title: string;
}

export const Button = ({ onClick, title }:IButton) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    )
}
