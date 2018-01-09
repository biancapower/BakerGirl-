import React from 'react';
import Movie from './Movie'

export default function MovieList({ movies }) {
  return (
    <div>
      <h1>Movie List!</h1>
      {
        movies.map(movie => {
          console.log(movie)
          return <Movie key={movie._id}
            {...movie}/>
        })
      }
     </div>
  )
}
