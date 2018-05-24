import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../styles/home.css'

import * as GlobalActions from '../actions/GlobalActions'
window.GlobalActions = GlobalActions

const mapStateToProps = state => ({
  count: state.counter.count,
  pingRes: state.ping.pingResponse,
  working: state.ping.working
})

function mapDispatchToProps(dispatch) {
  return {
    globalActions: bindActionCreators(GlobalActions, dispatch)
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <span style={{ display: 'block' }}>
            <code>Value: {this.props.count}</code>
          </span>
          <button onClick={this.props.globalActions.increaseCount}>
            Increase count
          </button>
          <button onClick={this.props.globalActions.decreaseCount}>
            Decrease count
          </button>
          <br />
          <button onClick={this.props.globalActions.initiatePingRequest}>
            Ping
          </button>
          <br/>
          {this.props.working ? "loading" : ""}
          <br/>
          <span style={{ display: 'block' }}>
            <code>ResponseFromServer: {JSON.stringify(this.props.pingRes)}</code>
          </span>
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)