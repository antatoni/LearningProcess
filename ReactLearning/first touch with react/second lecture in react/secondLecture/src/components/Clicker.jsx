import { useEffect, useState } from "react"

const Clicker = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Component was mounted!`)

        return () => {
            console.log(`Component was unmounted!`)
        }
    }, []);

    useEffect(() => {
        console.log(`Count was updated`, count)
    }, [count])

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
        </>

    )
}

export default Clicker