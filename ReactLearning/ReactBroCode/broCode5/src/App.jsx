import './App.css'
import List from './components/List.jsx'
function App() {
  const fruits = [
    {
      name: 'apple',
      calories: 95,
      id: 1
    },
    {
      name: 'banana',
      calories: 45,
      id: 2
    },
    {
      name: 'orange',
      calories: 105,
      id: 3
    },
    {
      name: 'coconut',
      calories: 159,
      id: 4
    },
    {
      name: 'mango',
      calories: 37,
      id: 5
    }];

  const vegetables = [
    {
      name: 'potatoes',
      calories: 110,
      id: 6
    },
    {
      name: 'celery',
      calories: 15,
      id: 7
    },
    {
      name: 'carrots',
      calories: 30,
      id: 8
    },
    {
      name: 'corn',
      calories: 63,
      id: 9
    },
    {
      name: 'brocolli',
      calories: 50,
      id: 10
    }];



  return (
    <>
      {vegetables.length > 0 ? <List category='Vegetables' /> : null}
      {fruits.length > 0 ? <List items={fruits} category='Fruits' /> : null}
    </>
  )
}

export default App
