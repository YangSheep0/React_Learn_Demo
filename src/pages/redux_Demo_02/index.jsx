import React, { Component } from 'react';
import store from '../../rudex/store'

import {createIncrementAction ,createDecrementAction ,createIncrementAsyncAction } from '../../rudex/count_action'
class ReduxDemo extends Component {

    state = {
        count: 0
    }

    componentDidMount(){
        //检测redux中状态变化 调用render
        store.subscribe(() => {  
            this.setState({})
        })
    }

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(+value))
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(+value))

    }
    incrementIFAdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(+value))
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        // setTimeout(() => {
            //调用异步action
            store.dispatch(createIncrementAsyncAction(+value,500))

        // }, 500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIFAdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default ReduxDemo;
