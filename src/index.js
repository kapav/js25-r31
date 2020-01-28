import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './home-page';
import {BrowserRouter} from 'react-router-dom'

const homePage = (
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
)

ReactDOM.render(homePage, document.getElementById('root'));
