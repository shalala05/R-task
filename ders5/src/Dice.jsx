import React, { useState } from "react";
import "./index.css";

const Dice = () => {
    const [number, setNumber] = useState(1);

    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setNumber(randomNum);
    };

    const renderDots = () => {
        const dots = {
            1: [<div key="dot1" className="dot center"></div>],
            2: [
                <div key="dot1" className="dot top-left"></div>,
                <div key="dot2" className="dot bottom-right"></div>,
            ],
            3: [
                <div key="dot1" className="dot top-left"></div>,
                <div key="dot2" className="dot center"></div>,
                <div key="dot3" className="dot bottom-right"></div>,
            ],
            4: [
                <div key="dot1" className="dot top-left"></div>,
                <div key="dot2" className="dot top-right"></div>,
                <div key="dot3" className="dot bottom-left"></div>,
                <div key="dot4" className="dot bottom-right"></div>,
            ],
            5: [
                <div key="dot1" className="dot top-left"></div>,
                <div key="dot2" className="dot top-right"></div>,
                <div key="dot3" className="dot center"></div>,
                <div key="dot4" className="dot bottom-left"></div>,
                <div key="dot5" className="dot bottom-right"></div>,
            ],
            6: [
                <div key="dot1" className="dot top-left"></div>,
                <div key="dot2" className="dot top-right"></div>,
                <div key="dot3" className="dot middle-left"></div>,
                <div key="dot4" className="dot middle-right"></div>,
                <div key="dot5" className="dot bottom-left"></div>,
                <div key="dot6" className="dot bottom-right"></div>,
            ],
        };

        return dots[number];
    };

    return (
        <div className="dice" onClick={rollDice}>
            {renderDots()}
        </div>
    );
};

export default Dice;