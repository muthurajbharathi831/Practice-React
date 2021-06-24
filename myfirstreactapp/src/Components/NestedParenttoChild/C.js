import React from 'react'
import D from './D'

class C extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name : this.props.name,
            city: this.props.city
        }
    }

    render(){
        return <div>
                <h2>Component C</h2>
                <p>Name : {this.state.name}</p>
                <p>City : {this.state.city}</p>
                <D name = {this.state.name} city = {this.state.city}/>
            </div>
        
    }
} 

export default C