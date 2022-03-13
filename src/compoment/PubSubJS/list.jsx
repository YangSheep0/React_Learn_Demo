import React, { Component } from 'react';
import PubSub from 'pubsub-js'; //引入PubSubJS 订阅信息
class List extends Component {
    state = {
        list: []
    }
    //组件加载完成开启订阅
    componentDidMount() {
        this.PubsubId = PubSub.subscribe('getListMsg', (_, data) => {
            console.log('收到订阅信息', data);
            this.setState({
                list: data
            })
        })
    }
    //组件卸载取消订阅
    componentWillUnmount() {
        console.log('卸载订阅');
        PubSub.unsubscribe(this.PubsubId);
    }

    render() {
        const { list } = this.state
        return (
            <div>
                <ul>
                    {
                        list.map(v => {
                            return (
                                <div key={v.id}>{v.name}</div>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default List;
