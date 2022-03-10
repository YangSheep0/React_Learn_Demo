import React, { Component } from 'react';
import './index.scss'
import Item from '../Item'
class List extends Component {
    render() {
        return (
            <div className='listbox'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
            </div>
        );
    }
}

export default List;