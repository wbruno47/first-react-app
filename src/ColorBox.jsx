import { useState } from 'react';
import './ColorBox.css';


function getRandomIndexItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function ColorBox({ colors }) {
    const [color, setColor] = useState(getRandomIndexItem(colors));

    const onClick = function () {
        const randomColor = getRandomIndexItem(colors);
        setColor(randomColor);
    }
    return (
        <div onClick={onClick} className="colorBox" style={{ backgroundColor: color }
        }></div>
    )
}

export default ColorBox;