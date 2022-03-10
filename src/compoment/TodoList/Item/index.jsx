import React, { Component } from 'react';
import './index.scss'

class Item extends Component {
    render() {
        return (
            <div className='flex'>
                <input type='checkbox' />
                <div>name</div>
            </div>
        );
    }
}

export default Item;