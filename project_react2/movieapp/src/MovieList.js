import React from "react";
import Movie from "./MovieCard";
import "./ModalList.css"

function MovieList({ allMovies }) {
  let gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "50%",
    gap: "70px",
    padding: "20px auto",
    marginLeft: "auto",
    marginRight: "auto",
  };

  let gridItem = {
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };
  
  return (
    <div style={{ textAlign: "center" }}>
      <ul style={gridContainer}>
        {allMovies.map((movie, index) => (
          <li key={index} style = {gridItem}>
            <Movie
              title={movie.title}
              description={movie.description}
              posterUrl={movie.posterurl}
              rating={movie.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;