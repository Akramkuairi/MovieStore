import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesLis from "./components/MoviesList";
import { useState,useEffect } from "react";
import axios from "axios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails'
function App() {
  // we need state to store all movie 
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0) // TO store count of page 

  //get all movies by axios 
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en")
    // setMovies(res.data.results)
    // setpageCount(res.data.total_pages)
    // console.log(res)
   // console.log(res.data.results)
   setMovies(res.data.results) // to store all mive in arrary
   //console.log(res.data.total_pages) // to get count of pages
   setPageCount(res.data.total_pages)
  }
  useEffect(() => {
     getAllMovies()
    // console.log(movies) 
  
    
  }, [])

  
  
   // search in api  
  const search =async(word)=>{
    if(word ===''){
      getAllMovies()
    }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`) 
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }}
// get current page 
  const getPage = async(page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  
  return (
    <div className="font color-body">
      <NavBar  search={search} />
      <Container className="py-5">
        <BrowserRouter>
        <Routes>
          <Route path="/"  element ={ <MoviesLis movies={movies} getPage ={getPage} pageCount={pageCount}/>}/>
       {/* <MoviesLis movies={movies} getPage ={getPage} pageCount={pageCount}/> */}
       <Route path="/movie/:id"  element ={  <MovieDetails  />}/>
       {/* <MovieDetails  /> */}
       </Routes>
       </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
