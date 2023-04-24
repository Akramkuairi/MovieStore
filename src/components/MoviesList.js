import React from 'react'
import CardMovie from './CradMovie'
import PaginationComponent from './Pagination'
import { Row } from "react-bootstrap";
const MoviesList = ({movies,getPage,pageCount}) => {
  return (
    <Row className='mt-3'>
      {
        movies.length >=1 ?( movies.map((mov)=>{ 
          return (
            <CardMovie key={mov.id} mov={mov}/>
          )
        })): <h2 className='text-center p-5'> No Film to Show </h2>
      }
     {
       movies.length >=1 ?( <PaginationComponent getPage={getPage} pageCount={pageCount}/>): null
     }
     

    </Row>
  )
}

export default MoviesList