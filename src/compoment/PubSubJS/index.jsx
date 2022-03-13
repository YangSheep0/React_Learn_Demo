import React, { Component } from 'react'
import List from './list'
export default class PubSub extends Component {
  state = {
    flag: false
  }
  handleSwitch = () => {
    const { flag } = this.state
    this.setState({
      flag: !flag
    })
  }
  render() {
    const { flag } = this.state
    return (
      <div>
        <p>flag:{`${flag}`}</p>
        <button onClick={this.handleSwitch}>switch</button>
        {/* 三元运算符 模拟组件卸载 */}
        {
          flag ? <List /> : <p>GGGGGGG</p>
        }
      </div>
    )
  }
}
