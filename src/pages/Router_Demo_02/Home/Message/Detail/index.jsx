import React, { Component } from 'react'
// import qs from 'querystring';

const DetailData = [
    {id:'01',cont:'Hello1'},
    {id:'02',cont:'Hello2'},
    {id:'03',cont:'Hello3'},
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        //接受params参数
        // const { id, title } = this.props.match.params;

        //接受search参数
        // const { search } = this.props.location;
        // const {id,title} = qs.parse(search.splice(1));

        //接受state参数
        const { id, title } = this.props.location.state || {};



        const findResult = DetailData.find( obj =>{
            return obj.id == id
        }) || {}
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>Content:{findResult.cont}</li>
                </ul>
            </div>
        )
    }
}
