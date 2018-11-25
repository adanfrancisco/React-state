import * as type from './types'

export const like = (id, like, unlike) => {
  return { type: type.LIKE, payload: { id, like, unlike } }
}

export const unlike = (id, unlike, like) => {
  return { type: type.UNLIKE, payload: { id, unlike, like } }
}

export const add = (id, title, description) => {
  return { type: type.ADD, payload: { id, title, description }}
}
