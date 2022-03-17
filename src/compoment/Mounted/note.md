## 生命周期：
    Ⅰ.初始化阶段：由ReactDOM.render()触发 --- 初次渲染
        1.constructor()
        2.getDerivedStateFromProps
        3.render()
        4.componentDidMount()   !important
    Ⅱ.更新阶段：由组件内部this.setState()或父组件重新render触发
        1.getDerivedStateFromProps
        2.shouldComponentUpdate()
        3.render()
        4.getSnapshotBeforeUpdate
        5.componentDidUpdate()
    Ⅲ.卸载组件：由ReactDOM.unmountComponentAtNode()触发
        1.componentWillUnmount() !important
        