import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { NavLink, BrowserRouter, HashRouter, Route } from 'react-router-dom'
import Message from './Message';
import News from './News';
class Home extends Component {
    render() {
        return (
            <div>
                Home
                <BrowserRouter>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/home/news">News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home/message">Message</NavLink>
                            </li>
                        </ul>
                        <Switch>
                            <Route path='/home/news' component={News} />
                            <Route path='/home/message' component={Message} />
                        </Switch>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;
