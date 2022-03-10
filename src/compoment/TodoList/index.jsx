import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import List from './List';
import './todolist.scss'
class TodoList extends Component {
    state = {
        todos: [
            { id: 1, name: '1', done: false },
            { id: 2, name: '2', done: false },
            { id: 3, name: '3', done: true },
        ]
    }

    addTodo = (obj) => {
        const { todos } = this.state
        const newTodos = [obj, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    checkTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map(v => {
            if (v.id === id) return { ...v, done }
            else return v
        })
        this.setState({
            todos: newTodos
        })
    }

    delTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(v => {
            return v.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map(v => {
            return { ...v, done }
        })
        this.setState({
            todos: newTodos
        })
    }

    clearAllTodo=()=>{
        const { todos } = this.state
        const newTodos = todos.filter(v => {
            return !v.done
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos } = this.state
        return (
            <div className='box'>
                <Header addTodo={this.addTodo} />
                <List todos={todos} checkTodo={this.checkTodo} delTodo={this.delTodo} />
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo}/>
            </div>
        );
    }
}

export default TodoList;