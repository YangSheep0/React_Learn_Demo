import React, { Component } from 'react'
import axios from 'axios'
export default class Students extends Component {
    handleClick = () => {
        axios.get('http://localhost:3000/students').then(
            res => {
                console.log(res.data);
            },
            err =>{
                console.log(err);
            }
        )
    }
    render() {
        return (
            <div>

                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
