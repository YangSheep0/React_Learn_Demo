import React, { Component } from 'react';
import './index.scss'

class Item extends Component {

    state = {
        flag: false
    }

    handleMouseEnter = (bool) => {
        return () => {
            this.setState({ flag: bool })
        }
    }

    handleMouseLeave = (bool) => {
        return () => {
            this.setState({ flag: bool })
        }
    }

    handleChecked = (id) => {
        return (e) => {
            this.props.checkTodo(id, e.target.checked)
        }
    }

    handleDel = (id) => {
        if(window.confirm('确定删除嘛?')){
            this.props.delTodo(id)
        }
    }   

    render() {
        const { id, name, done } = this.props
        const { flag } = this.state
        return (
            <div className='flex'
                onMouseLeave={this.handleMouseLeave(false)}
                onMouseEnter={this.handleMouseEnter(true)}
            >
                <input type='checkbox' checked={done} onChange={this.handleChecked(id)} />
                <div>{name}</div>
                <div className='del' onClick={() => { this.handleDel(id) }} style={{ display: flag ? 'block' : 'none' }}>删除</div>
            </div>
        );
    }
}

export default Item;