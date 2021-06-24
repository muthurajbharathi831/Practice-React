import React from 'react'
import C from './C'

class B extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : this.props.name,
            city: this.props.city
        }
    }
    render(){
        return <div>
            <h2>Component B</h2>
            <p>Name : {this.state.name}</p>
            <p>City : {this.state.city}</p>
            <C name = {this.state.name} city = {this.state.city}/>
        </div>
    }
}

export default B;