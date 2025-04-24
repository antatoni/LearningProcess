import PropTypes from 'prop-types';

const List = ({ items = [], category = 'Category' }) => {

    // fruits.sort((a, b) => b.calories - a.calories)

    const listItems = items.map((item) => <li key={item.id}>
        {item.name} : &nbsp; {item.calories}</li>)

    // const highCalorieFruits = fruits.filter((fruit) => fruit.calories >= 100)
    // const lowCaloriesFruits = fruits.filter((fruit) => fruit.calories <= 100)
    return (
        <>
            <h3 className='list-category'>{category}</h3>
            <ul className='list-items'>{listItems}</ul>
        </>
    )
}

export default List;