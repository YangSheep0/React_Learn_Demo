import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class Fetch extends Component {

    handleClick = async () => {
        //try catch 包裹fetch请求处理异常
        try {
            const response = await fetch('http://localhost:3000/students');
            const list = await response.json();
            console.log(list);

            //发布订阅信息 （订阅名，数据）
            PubSub.publishSync('getListMsg', list)

        } catch (error) {
            console.log(error);

        }
    }
    render() {
        return (
            <div>

                <button onClick={this.handleClick}>发送fetch</button>
            </div>
        )
    }
}
