import * as type from '../actions/types'
import { data } from '../data'

const initialState = {
  likesCount: {
    likeCount: 0,
    unlikeCount: 0
  },
  data: data
}

const likesCount = (state = initialState.likesCount, action) => {
  switch (action.type){
    case type.LIKE: {
      const likes = {
        likeCount: !action.payload.like
          ? state.likeCount + 1
          : state.likeCount - 1,
        unlikeCount: action.payload.unlike
          ? state.unlikeCount - 1
          : state.unlikeCount
      };
      return likes;
    }

    case type.UNLIKE: {
      const unlikes = {
        unlikeCount: !action.payload.unlike
          ? state.unlikeCount + 1
          : state.unlikeCount - 1,
        likeCount: action.payload.like ? state.likeCount - 1 : state.likeCount
      };
      return unlikes;
    }

    default:
      return state;
  }
}

const dataMovies = (state = initialState.data, action) => {
  switch (action.type) {
    case type.ADD: {
      const newMovie = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        like: false,
        unlike: false,
        image: 'https://media.comicbook.com/files/img/default-movie.png'
      }
      return [...state, newMovie]
    }
    case type.LIKE: {
      const newState = state.map(movie => {
        if (movie.id !== action.payload.id) {
          return movie;
        }
        return {
          ...movie,
          like: !movie.like,
          unlike: !movie.like ? false : movie.unlike
        };
      });
      return newState;
    }

    case type.UNLIKE: {
      const newState = state.map(movie => {
        if (movie.id !== action.payload.id) {
          return movie;
        }
        return {
          ...movie,
          like: !movie.unlike ? false : movie.like,
          unlike: !movie.unlike
        };
      });
      return newState;
    }

    default:
      return state;
  }
};


export { dataMovies, likesCount }
