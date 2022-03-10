import React, { Component } from 'react';
import './index.scss'
class Header extends Component {
    render() {
        return (
            <div className='headInput'>
                <input type="text" placeholder='what to do'/>
            </div>
        );
    }
}

export default Header;