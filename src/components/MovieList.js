import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies, handlerClickLike, handlerClickUnlike }) => (
  <ul className="MovieList">
    {movies.map((movie) => (
      <Movie 
        { ...movie } 
        key={ movie.id }
        handlerClickLike={() =>
          handlerClickLike(movie.id, movie.like, movie.unlike)
        }
        handlerClickUnlike={() =>
          handlerClickUnlike(movie.id, movie.like, movie.unlike)
        }
      />
    ))}
  </ul>
)

export default MovieList
