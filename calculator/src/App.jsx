import './App.css'
import {useState} from "react";
import {Buttons} from "./Buttons.jsx";
import {Display} from "./Display.jsx";

function App() {
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0.0);
  const [operator, setOperator] = useState("");

  const buttonClick = (text, operation) => {
    if (operation === "clear") {
      setResult("");
    } else if (operation === "multiply") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("*");
    } else if (operation === "divide") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("/");
    } else if (operation === "addition") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("+");
    } else if (operation === "subtract") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("-");
    } else if (operation === "equal") {
      const operand = parseFloat(result);
      if (operator === "+") {
        setResult((memory + operand).toFixed(0));
      } else if (operator === "*") {
        setResult((memory * operand).toFixed(0));
      }
    } else {
      setResult(prev => prev + text);
    }
  }

  return (
    <>
      <Display text={result}/>
      <Buttons onClick={buttonClick}/>
    </>
  )
}

export default App
