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