
import { BrowserRouter } from "react-router-dom";
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

return(
  <div className="App">

      <SearchBar handleFilter={handleFilter} />
      <Modal handleAddMovie={handleAddMovie} />
      <MovieList allMovies={allMovies} />
    </div> 
)

  return (
  <BrowserRouter >
  <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  </BrowserRouter>
   
  );

}

export default App;