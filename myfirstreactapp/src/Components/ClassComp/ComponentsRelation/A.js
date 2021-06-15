import React from 'react'
import Bcomp from './B'
class A extends React.Component {
    constructor (){
        super()
        this.state = {
            name:"Muthu",
            city: "Bangalore"
        }
    }

    render(){
        return <div style = {{textAlign:'center',color:'grey'}}>
            <h2>Name from Component A's its own State : {this.state.name}</h2>
            <Bcomp name = {this.state.name} city = {this.state.city}/>
        </div>
    }
}

export default A;