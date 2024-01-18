import './Button.css';
import {useEffect, useState} from "react";

export function Button({text, onClick}) {

  const [message, setMessage] = useState("");

  const buttonClick = () => {
    setMessage("clicked!");
    onClick(text);
  }

  useEffect(() => {
    const t = setInterval(() => {
      setMessage("");
    }, 1000);
    return () => clearInterval(t);
  }, [message]);

  return (
    <div className={"button"}>
      <h1>{message}</h1>
      <button onClick={buttonClick}>{text}</button>
    </div>
  )
}