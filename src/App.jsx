import React, { Component } from 'react'
import Count from './pages/react_redux_Demo_02/Containers/Count'
import Person from './pages/react_redux_Demo_02/Containers/Person'
export default class App extends Component {

  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count />
        <hr/>
        <Person />
      </div>
    )
  }
}
