import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import List from './List';
import './todolist.scss'
class TodoList extends Component {
    render() {
        return (
            <div className='box'>
                <Header/>
                <List/>
                <Footer/>
            </div>
        );
    }
}

export default TodoList;