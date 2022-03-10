import React from 'react';

class Demo extends React.Component{
    state ={
        name :'',
        pass :''
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const { name } =this.state;
        console.log(name);

    }
    
    componentDidMount(){
        console.log('gg');
        
    }

    save=(e)=>{
        this.setState({
            name : e.target.value
        })
    }
    
    render (){
        return (
            <form  onSubmit={this.handleSubmit}>
                n:<input onChange={this.save} type="text" name="name"/>
                ps:<input type="password" name="pass"/>
                <button onClick={this.handleSubmit}>login</button>
            </form>
        )
    }
}

export default Demo
  
  