import React, { Component } from 'react';

class ReduxDemo extends Component {

    state = {
        
    }


    increment = () => {
        const { value } = this.selectNumber

        this.props.countIncrement(+value)
    }
    decrement = () => {
        const { value } = this.selectNumber

        this.props.countDecrement(+value)
    }
    incrementIFAdd = () => {
        const { value } = this.selectNumber
        const count = this.props.count
        if (count % 2 !== 0) {
            this.props.countIncrement(+value)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber

        this.props.countIncrementAsync(+value,500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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
