import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './home-page';
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const homePage = (
  <Provider store={store}>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(homePage, document.getElementById('root'));
