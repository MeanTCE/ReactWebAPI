import React from 'react';
import ReactDOM from 'react-dom';
import Routess from './routes';
import {BrowserRouter as Router} from 'react-router-dom'
import './styles/custom.css'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={'/reactwebapi'}>
      <Routess />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);