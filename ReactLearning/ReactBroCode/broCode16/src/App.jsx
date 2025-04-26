import MyComponent from './components/MyComponent'
import './App.css'

function App() {

  //useState() = re-renders the component when the state value changes !


  //useRef() = Does not cause re-renders when its value changes ! 
  //           1.Accessing/Interacting with DOM elements
  //           2.Handling Focus , Animations and transitions
  //           3.Managing timers and intervals.


  return (
    <>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
