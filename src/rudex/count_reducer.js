/* 
    1.该文件用于创建一个为Count组件服务的reducer reducer本质是函数
    2.reducer函数会接受两参数，分别为 之前的状态（preState），动作对象（action）
*/
import { INCREMENT, DECREMENT } from '../rudex/constant'

export default function countReducer(preState, action) {
    console.log(preState);
    if(preState === undefined) preState = 0
    const { type, data } = action
    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState

    }
}