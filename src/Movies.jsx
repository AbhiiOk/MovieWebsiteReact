import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';
import "./App.css";

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <div>
      <section className="movie-page">
        <div className="container grid grid-4-col">
            {movie.map((currMovie)=>{
              const {imdbID ,Title ,Poster} = currMovie;
              const movieName = Title.substring(0,15);
                return(
                  <NavLink to={`Movies/${imdbID}`} key={imdbID} >
                    <div className="card">
                       <div className="card-info">
                         <h2>{movieName}</h2>
                         <img src={Poster} alt={imdbID} />
                       </div>
                    </div>
                  </NavLink>
                )
             })}
        </div>
      </section>
    </div>
  )
}

export default Movies
