import {createRoot} from 'react-dom/client';
import './site.css';
import robot from './robot.png';

function div_onclick() {
    const h1 = document.getElementById("heading");
    h1.innerText = "Hello World!";
    console.log("DIV clicked");
}

function h1_onclick() {
    const div = document.getElementById("division");
    div.style.backgroundColor = "lightblue";
    console.log("H1 clicked");
}

const root = createRoot( document.getElementById('root') );
root.render(
    <>
    <h1 id="heading" onClick={h1_onclick}>Basic React</h1>
    <div id="division" onClick={div_onclick}>
        <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
            Alias aut earum ex facilis hic incidunt inventore ipsum iste libero
            nesciunt officiis perspiciatis praesentium qui, repellat reprehenderit
            <em>sapiente sint veniam voluptatibus?</em></p>
        <img src={robot} alt="robot" width="200"/>
    </div>
    </>
);
/*
<h1 id="heading" onclick="h1_onclick()">Basic React</h1>
<div id="division" onclick="div_onclick()">
    <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
        Alias aut earum ex facilis hic incidunt inventore ipsum iste libero
        nesciunt officiis perspiciatis praesentium qui, repellat reprehenderit
        <em>sapiente sint veniam voluptatibus?</em></p>
    <img src="robot.png" alt="robot" width="200"/>
</div>
*/
