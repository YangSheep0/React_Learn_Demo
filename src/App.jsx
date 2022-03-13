import React, { Component } from 'react'
import PubSubJS from './compoment/PubSubJS'
import Fetch from './compoment/PubSubJS/fetch'

export default class App extends Component {
  render() {
    return (
      <div>
          <Fetch/>
          <PubSubJS/>
      </div>
    )
  }
}
