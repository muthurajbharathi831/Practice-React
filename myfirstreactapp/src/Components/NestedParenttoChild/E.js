import React from 'react'

class E extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name :  this.props.name,
            city : this.props.city
        }
    }

    render (){
        return <div>
            <h2>E Component</h2>
            <p>Name : {this.state.name}</p>
            <p>City : {this.state.city}</p>
        </div>
    }
}

export default E;