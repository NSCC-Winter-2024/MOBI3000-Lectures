import './App.css'
import {useState} from "react";
import {Buttons} from "./Buttons.jsx";
import {Display} from "./Display.jsx";

function App() {
  const [result, setResult] = useState("");

  const numberClick = (text) => {
    setResult(prev => prev + text);
  }

  return (
    <>
      <Display text={result}/>
      <Buttons numberClick={numberClick}/>
    </>
  )
}

export default App
