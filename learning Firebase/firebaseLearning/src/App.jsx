import { use, useEffect, useState } from 'react'
import './App.css'
import { Auth } from './components/Auth.jsx'
import {db} from './config/firebase-config.js'
import { getDocs , collection , addDoc , deleteDoc , doc} from 'firebase/firestore'

function App() {

  const [movieList , setMovieList] = useState([]);

  //New movie states
  const [newMovieTitle , setNewMovieTitle] = useState('');
  const [newReleaseDate , setNewReleaseDate] = useState('');
  const [isNewMovieOscar , setIsNewMovieOscar] = useState(false);

  const moviesCollectionRef = collection(db , 'movies');

  const getMovieList = async () => {
      // READ THE DATA 
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data() , id:doc.id}));
        setMovieList(filteredData);
      }catch (error) {
        console.error(error.message);

      }
      
      // SET THE MOVIE LIST STATE 
      
  }
useEffect(() => {
  getMovieList();
},[]);

const onSubmitMovie = async () => {
  try{
await addDoc(moviesCollectionRef , {title:newMovieTitle , releaseDate: newReleaseDate , receivedAnOscar : isNewMovieOscar })
getMovieList();
setNewMovieTitle('');
setNewReleaseDate('');
setIsNewMovieOscar(false);
} catch (error) {
console.error(error.message);
  } 
}

const deleteMovie = async (id) => {
  try {
const movieDoc = doc(db , "movies" ,id )
  await deleteDoc(movieDoc)
  getMovieList();
  }catch (error) {
    console.error(error.message);
  }
  
}
  

  return (
    <>
<Auth />
<div>
  <input value={newMovieTitle} placeholder='Movie title...' onChange={(e) => setNewMovieTitle(e.target.value)}/>
  <input value={newReleaseDate} placeholder='Release date...' type="number" onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
  <input type="checkbox" checked={isNewMovieOscar} onChange={(e) => setIsNewMovieOscar(e.target.checked)}/>
  <label >Received an oscar!</label>
  <button onClick={onSubmitMovie}>Submit Movie!</button>
</div>
<div>
  {movieList.map((movie) => (
    <div key={movie.id}> 
      <h1>{movie.title}</h1>
      <p>Date : {movie.releaseDate}</p>
      <p>Has an oscar :{movie.receivedAnOscar ? `Yes` : `No`}</p>

      <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
      </div>
  ))}
</div>
    </>
  )
}

export default App
