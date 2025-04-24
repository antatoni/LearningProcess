

const Food = () => {
    const food1 = 'Banana';
    const food2 = 'Apple';
    const food3 = 'Mango';
    const foods = [food1, food2, food3];
    return (
        <ul>
            {foods.map((food, index) => <li key={index}>{food}</li>)}
        </ul>
    )
}



export default Food;