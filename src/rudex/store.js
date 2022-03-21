/* redux Demo store配置 */

//引入createStore，创建redux中最核心的store对象
import { createStore ,applyMiddleware} from 'redux'
//引入为count组件的reducer
import countReducer from './count_reducer'
//引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'


export default createStore(countReducer,applyMiddleware(thunk))