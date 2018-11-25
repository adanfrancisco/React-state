import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Movies from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(
  reducer,
  {}, // initialState se controla en el reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = document.getElementById('root')

render(
  <Provider store={store}>
    <Movies name="John Serrano :D" />
  </Provider>,
  app
)

registerServiceWorker()
