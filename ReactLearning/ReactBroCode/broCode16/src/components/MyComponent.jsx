import { useState, useEffect, useRef } from "react";
const MyComponent = () => {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log(`COMPONENT RENDERED`)
    })

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
    }

    return (
        <>
            <button onClick={handleClick1}>Click me1!</button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>Click me2!</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click me3!</button>
            <input ref={inputRef3} />
        </>
    )
}

export default MyComponent;