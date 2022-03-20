## router_Demo_01 ##

## 路由基本使用
    1.a标签改为Link标签
        <Link to="/xxx" component={Demo}>
    2.展示区与Route标签进行路径的匹配
        <Route path='/xxx' component={Demo}>
    3.<App>的最外侧包裹<BrowserRouter>或<HashRouter>
## 路由组件与一般组件
    1.写法区别：
        一般组件：<Demo/>
        路由组件：<Route path="/demo" component={Demo}>
    2.规范存放位置：
        一般组件：components
        路由组件：pages
    3.接受到的props不同：
        一般组件：传啥接啥
        路由组件：三个固定属性
                history :
                    go goBack goForward push replace
                location :
                    pathname:"/demo"
                    search:""
                    state:undefined
                match :
                    params:{}
                    path:"/demo"
                    url:"/demo"
## NavLink与封装NavLink
    1.NavLink可以实现链接高亮 通过activeClassName指定样式名
    2.标签体内容是一个属性 this.props.children 

## Switch的使用
    1.通常情况下，path和component是一一对应的关系
    2.Switch可以提高路由匹配效率

## 解决多级路径刷新页面样式丢失的问题
    1.public/index.html 中 引入样式不写 ./ 写 / （常用）
    2.public/index.html 中 引入样式不写 ./ 写 %PUBLIC_URL%（常用）
    3.使用HashRouter

## 路由的严格匹配与模糊匹配
1.默认使用的是模糊匹配 [输入的路径]必须包含要[匹配的路径] 且顺序一致
    <Swich>
        <Route exact={true} path="/path" component={Demo}>
    </Switch>
2.开启严格匹配 exact 需要再开 有时会导致无法继续匹配二级路由
## Redirect的使用
    1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
    2.具体代码：
    <Swich>
        <Route exact={true} path="/path" component={Demo}>
        <Redirect to="/path" />
    </Switch>

## router_Demo_02 ##

## 嵌套路由
    1.注册子路由时要写上父路由的path值
    2.路由匹配是按照注册路由的顺序进行的

## 向路由组件传递参数
    1.params参数
        路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情</Link>
        注册路由（声明接受）：<Route path='/demo/test/:name/:age' component={Test}>
        接收参数：const {name ,age} = this.props.match.params
    2.search参数
        路由链接（携带参数）：<Link to='/demo/test?name=tom&age=18'>详情</Link>
        注册路由（无需声明接受）：<Route path='/demo/test' component={Test}>
        接收参数：const {search} = this.props.location
        备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
    3.state参数
        路由链接（携带参数）：<Link to={{pathname:'/demo/test',state:{id:obj.id,title:obj.title}}}>详情</Link>
        注册路由（无需声明接受）：<Route path='/demo/test' component={Test}>
        接收参数：const {search} = this.props.location.state
        备注：刷新也可以保留参数
## 编程式路由
    1.replace/push跳转+携带params参数:
        this.props.history.push(`/home/detail/${id}/${title}`)
    2.replace/push跳转+携带search参数:
        this.props.history.push(`/home/detail?id=${id}&title=${title}`)
    3.replace/push跳转+携带state参数:
        this.props.history.push(`/home/detail`,{id,title})

## withRouter的使用
    1.引入： import { withRouter } from 'react-router-dom'
    2.使用： export default withRouter(Header)
      备注: withRouter可以加工一般组件，让一般组件具备路由组件所持有的API
            withRouter的返回值是一个新组件

## BrowserRouter与HashRouter的区别
    1.底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及一下版本
        HashRouter使用的是URL的哈希值
    2.path表现形式不一样:
        BrowserRouter的路径中没有#，例如localhost:3000/demo
        HashRouter的路径包含#，例如localhost:3000/#/demo
    3.刷新后对路由state参数的影响
        BrowserRouter没有影响，state保存在history对象中
        HashRouter刷新后会导致路由state参数的丢失
    4.HashRouter可以用于解决一些路径错误相关的问题（样式丢失）
        
