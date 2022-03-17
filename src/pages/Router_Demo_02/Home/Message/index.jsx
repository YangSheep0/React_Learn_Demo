import React, { Component } from 'react'
import './index.scss'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'msg1' },
            { id: '02', title: 'msg2' },
            { id: '03', title: 'msg3' },
        ]
    }
    render() {

        const { messageArr } = this.state

        return (
            <div>
                <div>Message</div>
                <ul className='list'>
                    {
                        messageArr.map((obj) => {
                            return (
                                <div key={obj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${obj.id}/${obj.title}`}>{obj.title}</Link> */}
                                    
                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${obj.id}&title=${obj.title}`}>{obj.title}</Link> */}
                                
                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:obj.id,title:obj.title}}}>{obj.title}</Link>

                                
                                </div>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接受params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail } /> */}
                
                {/* search参数 无需声明接受 */}
                {/* <Route path='/home/message/detail' component={Detail } /> */}

                {/* state参数 无需声明接受 */}
                <Route path='/home/message/detail' component={Detail } />

                
            </div>
        )
    }
}
