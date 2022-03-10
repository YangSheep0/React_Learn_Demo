import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import List from './List';
import './todolist.less'
class TodoList extends Component {
    render() {
        return (
            <div>
                <Header/>
                <List/>
                <Footer/>
            </div>
        );
    }
}

export default TodoList;