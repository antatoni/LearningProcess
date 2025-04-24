import { useState } from "react";
const Counter = () => {

    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }

    return (
        <div className='counter-container'>
            <p className='count-display'>{counter}</p>
            <button className='button-plus' onClick={increment}>Increment</button>
            <button className='button-reset' onClick={reset}>Reset</button>
            <button className='button-minus' onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;