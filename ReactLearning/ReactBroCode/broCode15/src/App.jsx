import CompA from './components/CompA'
import CompB from './components/CompB'
import CompC from './components/CompC'
import CompD from './components/CompD'
import './App.css'

function App() {
  //useContect() = React Hook that allows you to share values
  //               between multiple levels of components 
  //               without passing props through each level !

  //Proveider COMPONENT
  //1.import {createContext} from 'react'
  //2.export const MyContext = createContext();
  //3.<MyContext.Provider value={value}>
  //    <Child />
  //   </MyContext.Proveider>

  //using context eliminates the need for prop drilling ! 


  return (
    <>
      <CompA></CompA>
    </>
  )
}

export default App
