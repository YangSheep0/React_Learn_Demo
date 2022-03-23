import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addPersonAction } from '../../../rudex/actions/person_action'
class Person extends Component {
    add = () => {
        const newobj = {name:this.newName.value}
        console.log(newobj);
        this.props.addPerson(newobj)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={c => this.newName = c} /> <button onClick={this.add}>{this.props.count}</button>
                <ul>
                    {
                        this.props.list.map( v =>{
                            return ( 
                                <li key={v.name}>{v.name}</li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        list:state.personList,
        count:state.count
    }),
    {
        addPerson:addPersonAction
    }
)(Person)
