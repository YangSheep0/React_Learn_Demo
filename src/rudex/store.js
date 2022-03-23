/* redux Demo store配置 */

//引入createStore，创建redux中最核心的store对象
import { createStore ,applyMiddleware ,combineReducers} from 'redux'
//引入为count组件的reducer
import countReducer from './reducers/count_reducer'
import personReducer from './reducers/person_reducer'
//引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    count : countReducer,
    personList: personReducer
})
export default createStore(allReducers,applyMiddleware(thunk))