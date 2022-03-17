import React, { Component } from 'react'
import './index.scss'
import { Link, NavLink , BrowserRouter, HashRouter , Route } from 'react-router-dom'
import About from './about'
import Home from './home'

export default class RDemo extends Component {
    render() {
        return (
            <div>
                {/*  BrowserRouter 包最外层 初始包App.jsx */}
                <BrowserRouter>
                    {/* <Link className='a' to="/about">About</Link>
                    <Link className='a' to="/home">Home</Link> */}
                    <NavLink activeClassName='act' className='a' to="/about">About</NavLink>
                    <NavLink activeClassName='act' className='a' to="/home">Home</NavLink>
                    <div className="show">
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" component={Home}></Route>
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}
