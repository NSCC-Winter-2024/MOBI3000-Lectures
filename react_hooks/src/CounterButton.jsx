import {useEffect, useState} from "react";
import './CounterButton.css';

export function CounterButton(props) {

    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("red");
    const [pressed, setPressed] = useState(false);

    const buttonClick = () => {
        //setCount(count + props.countBy);
        setColour(props.colour);
        setPressed(!pressed);
    };

    useEffect(() => {
        console.log("useEffect called.");
    });

    // will only be called during mounting and unmounting
    useEffect(() => {
        console.log("useEffect called with []");
    }, []);

    // will only be called if 'count' changes
    useEffect(() => {
        if (pressed) {
            const t = setInterval(() => {
                setCount(prev => prev + props.countBy);
            }, 1000);
            return () => clearInterval(t);
        }
    }, [props.countBy, pressed]);

    return (
        <div className={"counter"}>
            <h1 style={{backgroundColor:colour}} className={"counter_heading"}>{count}</h1>
            <button onClick={buttonClick} className={"counter_button"}>Press Me</button>
        </div>
    )
}