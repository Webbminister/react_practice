
import SearchBar from "./Filter";
import Modal from "./Modal";
import MovieList from "./MovieList";
import movieObj from "./MovieObjArr";
import { useState } from "react";

function App() {
  const [allMovies, setAllMovies] = useState(movieObj);
  let movieArrCopy = movieObj.slice();
  function handleFilter(search) {
    let filteredMovie = movieArrCopy.filter((value) =>
      value.title.toLowerCase().includes(search.toLowerCase())
    );
    setAllMovies(filteredMovie);
  }
 
 function handleAddMovie(movieObjs){
   let newMovieArr = [...movieObj, movieObjs]
    setAllMovies(newMovieArr)
}


  return (
    <div className="App">
      <SearchBar handleFilter={handleFilter} />
      <Modal handleAddMovie={handleAddMovie} />
      <MovieList allMovies={allMovies} />
    </div>
  );
}

export default App;