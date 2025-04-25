import { useState } from "react"

const MyComponent = () => {
    const [car, setCar] = useState({
        year: 2004,
        make: 'BMW',
        model: 'E60',
    })

    const handleYearChange = (event) => {
        setCar(prevCar => ({ ...prevCar, year: event.target.value }))
    }

    const handleMakeChange = (event) => {
        setCar(prevCar => ({ ...prevCar, make: event.target.value }))
    }
    const handleModelChange = (event) => {
        setCar(prevCar => ({ ...prevCar, model: event.target.value }))
    }
    return (
        <div>
            <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    )
}


export default MyComponent