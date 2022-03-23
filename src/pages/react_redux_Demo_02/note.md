## 求和案例 react-redux数据共享版
    1.定义一个Person组件 和Count组件通过redux共享数据
    2.为Person组件编写：reducer、action，配置constant常量
    3.重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
        合并后的总状态是一个对象
    4.交给store的是总reducer 最后组件去除状态时注意key值

## 扩展知识 纯函数和高阶函数
    * 纯函数
        1.一类特别的函数：只要是同样的输入(实参)，必定得到同样的输出(返回)
        2.遵循一下约束
            1).不得修改参数数据
            2).不会产生任何副作用，例如网络请求，输入和输出设备
            3).不能调用Date.now()或者Math.random()等不纯的方法
        3.redux的reducer函数必须是一个纯函数
    * 高阶函数
        1.一类特别的函数 （参数是函数）或者（返回值是函数）
        2.常见的高阶函数：
            1).定时设置函数
            2).数组的forEach()/map()/filter()/reduce()/find()/bind()
            3).promise

