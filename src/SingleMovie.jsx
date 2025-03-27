import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {API_URL} from './Context';

const SingleMovie = () => {
  const {id} = useParams();
   const [isLoading,setLoading] = useState(true);
    const [movie,setMovie] = useState("");
  
    //getmovies function
    const getMovies = async(url) =>{
      setLoading(true)
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
  
  
        if(data.Response === 'True') {
          setLoading(false)
          setMovie(data)
        }
  
        
      }catch (error){
        console.log(error);
      }
    }
    
    //first time rendernig the page
    useEffect(()=>{
      let timerOut = setTimeout(()=>{
        getMovies(`${API_URL}&i=${id}`);
      },800)
      
      return () => clearTimeout(timerOut)
    },[id])

    if(isLoading){
      return(
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      )
    }
  
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster}/>
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Coutry}</p>
          <NavLink to='/' className='back-btn'>Go Back</NavLink>
        </div>

      </div>
    </section>
  )
}

export default SingleMovie
