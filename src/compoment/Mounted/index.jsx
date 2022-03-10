import React from 'react';
import './mounted.css'
class MountDemo extends React.Component {
    state = {
        list: [],
        timer: null,
        listDOM: null,

    }
    //更新前
    getSnapshotBeforeUpdate() {

        console.log('getSnapshotBeforeUpdate');
        return this.state.listDOM.scrollHeight

    }
    //已更新
    componentDidUpdate(props, state, height) {
        console.log(props, state, height);
        this.state.listDOM.scrollTop =this.state.listDOM.scrollTop + this.state.listDOM.scrollHeight - height;
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.start();

    }
    getlistDom = (DOM) => {
        console.log('getlistDom');
        this.setState({ listDOM: DOM })
    }
    stop = () => {
        clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }
    start = () => {
        let timer = setInterval(() => {
            let { list } = this.state;
            let newitem = `XXXXX${list.length + 1}`;
            this.setState({
                list: [newitem, ...list]
            })
        }, 1000)

        this.setState({
            timer: timer
        })
    }
    render() {
        const { list } = this.state
        return (
            <div>
                <div className='a' ref={this.getlistDom}>
                    {
                        list.map((v, index) => {
                            return <div key={index} className="b">{v}</div>
                        })
                    }

                </div>
                <button onClick={this.stop}>停</button>
                <button onClick={this.start}>启</button>
            </div>

        )
    }
}

export default MountDemo

