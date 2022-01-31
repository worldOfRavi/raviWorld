import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ReactRouter from './Router/ReactRouter'
import {BrowserRouter} from 'react-router-dom';
// import Index from './ReactRoute/Index';
// import './ReactRoute/Index.css';
// import App from './AnimatedWebsite/App'

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);


