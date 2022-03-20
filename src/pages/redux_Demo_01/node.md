## 求和案例DEMO1 redux精简版
1.去除Count组件自身状态
2.src下建立-redux 
            -store.js
            -count_reducer.js
3.store.js
    1).引入redux中的creataStore函数，创建一个store
    2).createStore调用时要传入一个为其服务的reducer
    3).暴露store对象
4.count_reducer.js
    1).本质是一个函数，接受preState，action 返回加工后的状态
    2).两作用：初始化状态，加工状态
    3).reducer被第一次调用时，是store自动触发的，传递的preState是undefined
5.在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
    备注：redux只负责管理状态，至于状态的改变驱动需自行写
## 求和案例DEMO2 
    新增文件：
    1).count_action.js 专门用于创建action对象
    2).constant.js 放置常量
## 求和案例DEMO3
    1).明确需求：延迟动作不想交给组件自身，想使用action
    2).何时需要异步action：想要对其状态进行操作，但具体数据靠异步返回。
    3).具体编码：
        1.yarn add redux-thunk 并配置在store中
        2.创建action的函数不再返回一般对象，而是函数，该函数中写异步
        3.异步任务有结果后，分发一个同步的action去真正操作数据
    4).备注：异步action不是必须，可先调异步再分发同步action
