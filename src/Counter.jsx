import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(5);

    const changeNum = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Click me to increment</button>
        </div>
    )
}

export default Counter; 