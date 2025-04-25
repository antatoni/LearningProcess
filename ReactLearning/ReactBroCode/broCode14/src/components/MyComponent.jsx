import { useState, useEffect } from "react";
// useEffect() = React hook tha tells react to do some code when : 
//1-this component re-renders
//2-this component mounts
//3-the state of a value changes

//useEffect(function/arrowFunc , OPTIONAL[dependencies])

//1.useEffect(() => {})              Runs after every re-render
//2.useEffect(() => {} ,[])          Runs only on mount 
//3.useEffect(() => {} ,[value])     Runs on mount and when value changes
const MyComponent = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerHeight);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log(`EVENT LISTENER ADDED`);

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log(`EVENT LISTENER REMOVED`)
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}

export default MyComponent




// import { useState, useEffect } from "react"
// const MyComponent = () => {

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState('green');

//     const addCount = () => {
//         setCount(prevCount => prevCount + 1);
//     }

//     const subtractCount = () => {
//         setCount(prevCount => prevCount - 1);
//     }

//     useEffect(() => {
//         document.title = `Count: ${count} ${color}`

//         return () => {
//             //clean up code

//         }
//     }, [count])

//     const changeColor = () => {
//         setColor(prevColor => prevColor === 'green' ? "red" : 'green');
//     }
//     return (<>
//         <p style={{ color }}>Count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={subtractCount}>Subtract</button><br />
//         <button onClick={changeColor}>Change Color</button>
//     </>)
// }

// export default MyComponent