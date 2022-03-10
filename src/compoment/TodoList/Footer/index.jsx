import React, { Component } from 'react';
import './index.scss'
class Footer extends Component {


    handleAllcheck = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }

    handleClear = () => {
        this.props.clearAllTodo()
    }

    render() {
        const { todos } = this.props

        const doneCount = todos.reduce(
            (pre, cur) => pre + (cur.done ? 1 : 0), 0
        )
        
        const total = todos.length;
        return (
            <div className="flexbox">
                <div className="leftbox flexbox">
                    <input type="checkbox" onChange={this.handleAllcheck} checked={doneCount === total && total !==0 ? true : false} />
                    <p>已完成 {doneCount} / 全部 {total}</p>
                </div>
                <button onClick={this.handleClear}>清除已完成</button>
            </div>
        );
    }
}

export default Footer;