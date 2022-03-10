import React, { Component } from 'react';
import './index.scss'
import PropTypes from 'prop-types'
import Item from '../Item'
class List extends Component {

    static propTypes = {
        todos : PropTypes.array.isRequired,
        checkTodo : PropTypes.func.isRequired,
        delTodo : PropTypes.func.isRequired,
    }

    render() {
        const { todos , checkTodo ,delTodo } = this.props
        return (
            <div className='listbox'>
                {
                    todos.map(v => {
                        return <Item key={v.id} {...v} checkTodo ={checkTodo} delTodo = {delTodo} />
                    })
                }
            </div>
        );
    }
}

export default List;