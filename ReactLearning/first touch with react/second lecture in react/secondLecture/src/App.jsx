import { useState } from 'react';
import './App.css'
import Foldable from './components/Foldable.jsx';
import Clicker from './components/Clicker.jsx';
import DataFetcher from './components/DataFetcher.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
  })
  const changeName = () => {
    // user.name = 'Alice';
    // setUser({ ...user });//when working with refference types you have to spread them so they show instantly ! 
    setUser({ ...user, name: 'Perry' });
  }
  const increment = () => {
    setCount(count => count + 1);
  }
  return (
    <>
      <p>Advanced Components</p>
      <Foldable>
        <Clicker />
      </Foldable>
      <Foldable>
        <DataFetcher>
        </DataFetcher>
      </Foldable>
    </>
  )
}

export default App
