import {React , createContext, useContext, useEffect, useState}from "react";

// first making context (Warehouse)

const AppContext = createContext();
//creating API.
const API_KEY = "bd4b7a88"; 
export const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

// we need to create a provider (delivery boy)

function AppProvider({ children }) {

  const [isLoading,setLoading] = useState(true);
  const [movie,setMovie] = useState([]);
  const [isError,setIsError] = useState({show:"false", msg : "" })
  const [query , setQuery] = useState("titanic")

  //getmovies function
  const getMovies = async(url) =>{
    setLoading(true)
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if(data.Response === 'True') {
        setLoading(false)
        setMovie(data.Search)
      }else{
        setIsError({
          show:true,
          masg:data.error
        })
      }
      
    }catch (error){
      console.log(error);
    }
  }
  //first time rendernig the page
  useEffect(()=>{
    let timerOut = setTimeout(()=>{
      getMovies(`${API_URL}&s=${query}`);
    },800)

    return () => clearTimeout(timerOut)
  },[query])

  return (
    <AppContext.Provider value={ {isLoading , isError , movie ,query , setQuery} }>
      {children}
    </AppContext.Provider>
  );
}
//global custom hooks
const useGlobalContext = () =>{
  return useContext(AppContext);
}

export { AppContext, AppProvider ,useGlobalContext };
