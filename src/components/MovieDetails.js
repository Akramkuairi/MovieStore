import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
const MovieDetails = () => {
    const [movie, setMovie] = useState([])

   // useParams is hook allow to ,get the pamas in url 
   const param =useParams() // now we store all params in url in const pram by using useParm()
     console.log(param.id)

     //get all movies by Details 
  const getMovieDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
    
   setMovie(res.data) // to store all mive in arrary
  
  }

  useEffect(() => {
    getMovieDetails()
  }, [])
  
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                 film name: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                 film date :{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                 vote count  : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                            vote average {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">story:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                   <Link to ="/"> 
                        <button
                            style={{ backgroundColor: "#416ea8", border: "none" }}
                            className="btn btn-primary mx-2">
                             Back to Home Page
                        </button>
                        </Link>
                        <a href={movie.homepage}>
                        <button
                            style={{ backgroundColor: "#416ea8", border: "none" }}
                            className="btn btn-primary">
                             Film review 
                        </button>
                        </a>
                   
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails