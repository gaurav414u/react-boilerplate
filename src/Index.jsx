import React from 'react'
import ReactDOM from 'react-dom'
import FluxApp from './utils/FluxApp'
import './styles/index.css'

// Initializing the fluxapp and the alt
let fluxApp = new FluxApp() // eslint-disable-line no-unused-vars
console.log("FluxApp initialized")

// This need to be after FluxApp creation because this will create stores which need alt instance
let Main = require('./components/Main').default

// Disabling service worker for now
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />
    ,
    document.getElementById('root')
)
// registerServiceWorker();
