import React, {useState} from "react";

function Counter() {
    let counter = 0;
    const [counter2, setCounter] = useState(0);
    const incrementHandler = () => {
        counter = counter + 1;
        setCounter(counter2 + 1);
    }
    const decrementHandler = () => {
        counter = counter - 1;
        setCounter(counter2 - 1);
    }
    return (
        <div style={{padding:50}}>
            {/* <button onClick={decrementHandler}> - </button>
            <span style={{padding: 20}}>{counter}</span>
            <button onClick={incrementHandler}> + </button> */}
            <hr/>
            <button onClick={decrementHandler}> - </button>
            <span style={{padding: 20}}>{counter2}</span>
            <button onClick={incrementHandler}> + </button>
        </div>
    )
}

export default Counter;