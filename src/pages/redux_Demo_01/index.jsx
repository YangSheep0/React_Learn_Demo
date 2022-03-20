import React, { Component } from 'react';
import store from '../../rudex/store'
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
        // const { count } = this.state
        // this.setState({ count: count + (+value) })
        store.dispatch({type:'increment',data: +value})
    }
    decrement = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count - (+value) })
        store.dispatch({type:'decrement',data: +value})

    }
    incrementIFAdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            // this.setState({ count: count + (+value) })
            store.dispatch({type:'increment',data: +value})
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        setTimeout(() => {
            // this.setState({ count: count + (+value) })
            store.dispatch({type:'increment',data: +value})

        }, 500)
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
