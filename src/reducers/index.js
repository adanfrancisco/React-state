import { dataMovies, likesCount } from './movies'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  dataMovies, likesCount
})

export default rootReducer
