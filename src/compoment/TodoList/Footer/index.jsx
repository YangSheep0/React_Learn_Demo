import React, { Component } from 'react';
import './index.scss'
class Footer extends Component {
    render() {
        return (
            <div className="flexbox">
                <div className="leftbox flexbox">
                    <input type="checkbox" />
                    <p>已完成 0 / 全部 2</p>
                </div>
                <button>清除已完成</button>
            </div>
        );
    }
}

export default Footer;