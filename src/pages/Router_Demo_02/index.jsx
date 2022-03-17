import React, { Component } from 'react'
import './index.scss'
import { Link, NavLink , BrowserRouter, Switch, Redirect , Route } from 'react-router-dom'
import About from './About/about'
import Home from './Home/home'

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
                        <Switch>
                            <Route path="/about" component={About}></Route>
                            <Route path="/home" component={Home}></Route>
                            <Redirect to="/about" />
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}
