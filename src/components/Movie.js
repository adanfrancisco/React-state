import React from 'react'

const Movie = ({ title, description, like, unlike, image, handlerClickLike, handlerClickUnlike }) => (
  <li className="Movie">
    <figure className="Movie-image">
      <img height="160px" width="110" src={ image } alt="title" />
    </figure>
    <div className="Movie-content">
      <div className="Movie-meta">
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
      <div className="Movie-actions">
        <span
          onClick={handlerClickLike}
          className={`icon-like ${like ? 'is-liked' : ''}`}
        >
          &#10003;
        </span>
        <span
          onClick={handlerClickUnlike}
          className={`icon-unlike ${unlike ? 'is-unliked' : ''}`}
        >
          &#10005;
        </span>
      </div>
    </div>
  </li>
)

export default Movie
