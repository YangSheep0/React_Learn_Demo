import React, { Component } from 'react'
import ReduxDemo from './pages/react_redux_Demo_01/countContainer'
import store from './rudex/store'
export default class App extends Component {

  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <ReduxDemo store={store} />
      </div>
    )
  }
}
