import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
 
  render(){
    const { list, onLike, onUnlike } = this.props;

    const listMovies = list.map((movie, index) => (
      <Movie 
        { ...movie } 
        key={ index }
        onLike={ onLike }
        onUnlike={ onUnlike }
        index={ index }
      />
    ));
    return(
      <ul className="MovieList">
        { listMovies }
      </ul>
    );
  }
}

export default MovieList;
