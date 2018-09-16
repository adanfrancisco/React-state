import React, { Component } from 'react';

class Movie extends Component {

  // Esto se puede mejorar con redux.
  onLike = (event) => {
    event.preventDefault();
    this.props.onLike(this.props.index);
  }

  onUnlike = (event) => {
    event.preventDefault();
    this.props.onUnlike(this.props.index);
  }

  render(){
    const {
      image,
      description,
      title,
      like,
      unlike
    } = this.props;

    return(
      <li className="Movie">
        <figure className="Movie-image">
          <img height="160px" width="110" src={ image } />
        </figure>
        <div className="Movie-content">
          <div className="Movie-meta">
            <h2>{ title }</h2>
            <p>{ description }</p>
          </div>
          <div className="Movie-actions">
            <span onClick={this.onLike} className={`icon-like ${like ? 'is-liked' : '' }`}>&#10003;</span>
            <span onClick={this.onUnlike} className={`icon-unlike ${unlike ? 'is-unliked' : '' }`}>&#10005;</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Movie;