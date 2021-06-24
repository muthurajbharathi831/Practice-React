import React from 'react'
import Child from './Child'

class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"",
            city:""
        }
    }

    
    updateState = (newName,newCity) => {
        this.setState({
            name:newName,
            city:newCity
        })
    }

    render (){
        return <div>
            <h2>This is Parent Component</h2>
            <p>Name : {this.state.name}</p>
            <p>City : {this.state.city}</p>
            <Child getData = {this.updateState}/>
        </div>
    }
}

export default Parent;