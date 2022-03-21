//引入Count 的UI组件
import CountUI from '../countUI'
//引入connect用于链接UI组件与redux
import { connect } from 'react-redux'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../../rudex/count_action'

/* 
    1.mapStateToProps函数返回的是一个对象：
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapStateToProps用于传递状态
*/
const mapStateToProps = (state) => {
    
    return { count: state  }
}

/* 
    1.mapDispatchToProps函数返回的是一个对象：
    2.返回的对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
*/
const mapDispatchToProps = (dispatch) => {
    return {
        countIncrement: data => dispatch(createIncrementAction(data)),
        countDecrement: data => dispatch(createDecrementAction(data)),
        countIncrementAsync: (data,time) => dispatch(createIncrementAsyncAction(data,time)),
    }
}


//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)


