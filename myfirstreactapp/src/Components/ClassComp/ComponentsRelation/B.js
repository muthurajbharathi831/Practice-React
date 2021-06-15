import React from 'react'
import './B.css'
class B extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Muthu in B component",
            city : "Bangalore in B Component"
        }
    }
    render(){
        return <div className="content">
            <p >Name in B Component : {this.state.name}</p>
            <p>City in B Component : {this.state.city}</p>

            <p>Name through Props from A's component : {this.props.name}</p>
            <p>City through Props from A's component : {this.props.city}</p>
        </div>
    }
}

export default B;