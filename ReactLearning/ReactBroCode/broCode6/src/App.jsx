import Button from './components/Button.jsx'
import ProfilePicture from './components/ProfilePicture.jsx'
import './App.css'

function App() {


  return (
    <>
      <div className='picDiv'>
        <ProfilePicture></ProfilePicture>
      </div>
      <div className='buttonDiv'>
        <Button></Button>
      </div>

    </>
  )
}

export default App
