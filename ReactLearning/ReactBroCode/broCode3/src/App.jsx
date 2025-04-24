import Student from "./components/Student.jsx"
function App() {

  return (<>
    <Student name='Spongebob' age='30' isStudent={true} />
    <Student name='Patrick' age={45} isStudent={false} />
    <Student name='Sandy' age={26} isStudent={true} />
    <Student name='Squidward' age={38} isStudent={false} />
    <Student name='' />
  </>)

}

export default App
