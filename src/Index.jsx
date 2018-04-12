import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import Main from './components/Main'

// Disabling service worker for now
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />
    ,
    document.getElementById('root')
)
// registerServiceWorker();
