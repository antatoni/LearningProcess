import { useState } from "react"

const MyComponent = () => {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById('foodInput').value = '';
        setFoods(prevList => [...prevList, newFood])
    }
    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }
    return (
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) =>
                    <li onClick={() => handleRemoveFood(index)} key={index}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" placeholder="Type some food's" id="foodInput" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}


export default MyComponent