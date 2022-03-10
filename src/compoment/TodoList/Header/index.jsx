import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';

class Header extends Component {

    static propTypes = {
        addTodo : PropTypes.func.isRequired
    }

    handleKeyUp = (e) => {
        const { target, keyCode } = e;
        if (keyCode !== 13) return
        if (target.value.trim() === '') return

        console.log(target.value);

        let newobj = { id: nanoid(), name: target.value, done: false }

        this.props.addTodo(newobj);
        target.value = '';
    }
    render() {
        return (
            <div className='headInput'>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder='what to do' />
            </div>
        );
    }
}

export default Header;