/* 
    该文件为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from '../rudex/constant'

//同步action 指action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })

//异步action 指action的值为函数，异步action中一般会调用同步action

export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {  
        setTimeout ( () => {  
            dispatch(createIncrementAction(data))
        },time)
    }
}

