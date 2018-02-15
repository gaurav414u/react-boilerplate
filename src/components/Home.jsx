import React, { Component } from 'react'
import logo from '../images/logo.svg'
import '../styles/home.css'
import LoginStore from '../stores/LoginStore'

class Home extends Component {
  constructor() {
    super()
    this.state = this.getUpdatedState()
  }

  getUpdatedState = () => {
    return {
      logins: LoginStore.getState()
    }
  }

  componentDidMount() {
    LoginStore.listen(this.onChange)
  }

  componentWillUnmount() {
    LoginStore.unlisten(this.onChange)
  }

  onChange = () => {
    this.setState(this.getUpdatedState())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <span style={{display:'block'}}>
            <code>Value: {this.state.logins.value}</code>
          </span>
          <span style={{display:'block'}}>
            <code>ResponseFromServer: {this.state.logins.pingRes}</code>
          </span>
        </p>
      </div>
    )
  }
}

export default Home