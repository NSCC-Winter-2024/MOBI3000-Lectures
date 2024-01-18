import './Buttons.css';
import {Button} from "./Button.jsx";

export function Buttons({numberClick}) {
  return (
    <div className={"buttons"}>
      <Button text={"7"} onClick={numberClick}/>
      <Button text={"8"} onClick={numberClick}/>
      <Button text={"9"} onClick={numberClick}/>
      <Button text={"*"} onClick={numberClick}/>
      <Button text={"4"} onClick={numberClick}/>
      <Button text={"5"} onClick={numberClick}/>
      <Button text={"6"} onClick={numberClick}/>
      <Button text={"-"} onClick={numberClick}/>
      <Button text={"1"} onClick={numberClick}/>
      <Button text={"2"} onClick={numberClick}/>
      <Button text={"3"} onClick={numberClick}/>
      <Button text={"+"} onClick={numberClick}/>
      <Button text={"C"} onClick={numberClick}/>
      <Button text={"0"} onClick={numberClick}/>
      <Button text={"."} onClick={numberClick}/>
      <Button text={"="} onClick={numberClick}/>
    </div>
  );
}