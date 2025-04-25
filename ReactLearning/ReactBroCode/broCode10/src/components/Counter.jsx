import { useState } from "react";
const Counter = () => {

    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(prevCount => prevCount + 1);

        setCounter(prevCount => prevCount + 1);

        setCounter(prevCount => prevCount + 1);

        //if you need to update (even though its a good practice) 
        //you should use arrow functions in the Setter's !


    }
    const decrement = () => {

        setCounter(prevCount => prevCount - 1);
        setCounter(prevCount => prevCount - 1);
        setCounter(prevCount => prevCount - 1);
    }
    const reset = () => {
        setCounter(prevCount => prevCount = 0);
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