import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {CounterButton} from "./CounterButton.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CounterButton countBy={1} colour="red" />
    <CounterButton countBy={2} colour="blue" />
    <CounterButton countBy={5} colour="violet" />
  </>,
)
