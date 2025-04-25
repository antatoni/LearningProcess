import { useState } from "react"

const MyComponent = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    const handleAddCar = () => {

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(prevCars => [...prevCars, newCar])
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    const handleRemoveCar = (index) => {
        setCars(prevCars => prevCars.filter((_, i) => i !== index))
    }

    const handleYearChange = (event) => {

        setCarYear(event.target.value);
    }

    const handleMakeChange = (event) => {
        setCarMake(event.target.value)
    }

    const handleModelChange = (event) => {
        setCarModel(event.target.value)
    }
    return (
        <div>
            <h2>List of car Objects</h2>
            <ul>
                {cars.map((car, index) => <li onClick={() => handleRemoveCar(index)} key={index}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car Make" /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model" /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}


export default MyComponent