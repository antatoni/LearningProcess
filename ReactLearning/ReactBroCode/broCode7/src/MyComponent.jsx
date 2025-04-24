import { useState } from "react"

const MyComponent = () => {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

    const incrementAge = () => {
        setAge(age + 1);

    }

    const updateName = () => {
        setName('SpongeBob');
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>
            <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmployedStatus}>Toggle Employment</button>
        </div>
    )
}

export default MyComponent