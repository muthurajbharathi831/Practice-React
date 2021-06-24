import React from 'react'
import E from './E'

class D extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : this.props.name,
            city : this.props.city
        }
    }

    render() {
        return <div>
            <h2>Component D</h2>
            <p>Name: {this.props.name}</p>
            <p>City : {this.props.city}</p>
            <E name = {this.state.name} city = {this.state.city}/>
        </div>
    }
}

export default D;
