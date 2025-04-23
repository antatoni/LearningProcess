import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import Button from './Components/Button.jsx'
import LearningPlan from './Views/LearningPlan.jsx'
import './App.css'

function App() {
  const greeting = 'Hello world';
  const number = 2;
  const condition = true;
  const people = [];

  const renderCondition = () => {
    if (condition) {
      return <span>{greeting}</span>
    } else {
      return <span>{number}</span>
    }
  }

  return (
    <>
      <Header></Header>
      <h1>{greeting}</h1>
      {/* <p>Test : {condition ? <span>{greeting}</span> : <span>{number}</span>}</p> */}
      {/* <p>Test : {condition ? <span>{greeting}</span> : null}</p> */}
      {/* <p>Test : {condition && <span>{greeting}</span>}</p> */}
      {/* <p>Test : {people.length && <span>{number}</span>}</p> */}
      <p>Test: {renderCondition()}</p>
      <LearningPlan />
      <Button text='Click me!' color='green' onClick={() => alert(`Button clicked`)} />
      <Button text='Click me!' color='red' onClick={() => console.log(`Button Clicked!`)} />
      <Button text='Click me!' color='blue' />
      <Button color={condition ? "green" : "gray"} text={condition ? "Enabled" : "Disabled"} />
      <Footer></Footer>
    </>
  )
}

export default App
