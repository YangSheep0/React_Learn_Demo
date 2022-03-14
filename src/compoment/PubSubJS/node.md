1.结构赋值+重命名
    let obj = {a:{b:1}}
    const {a} = obj;
    const {a:{b}} = obj;
    const {a:{b:athorName}} =obj;

2.消息订阅与发布机制
    1.先订阅 PubSub.subscribe('getMsg', (_, data) ，再发布 PubSub.publishSync('getListMsg', data)
    2.用于任意组件通信
    3.需在componentWillUnmount中取消订阅

3.fetch 发送请求 （内置函数）
     try {
            const response = await fetch('http://localhost:3000/students');
            const list = await response.json();
            console.log(list);
        } catch (error) {
            console.log(error);
        }