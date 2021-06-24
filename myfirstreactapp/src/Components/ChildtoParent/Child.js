import React from 'react'


class Child extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Muthu",
            city: "Bangalore"
        }
    }
    childCallback = () => {
        this.props.getData(this.state.name,this.state.city)
    }

    render(){
        return <div>
            <h2>This is Child component, I am going to pass data from Child Component to Parent through Callback function</h2>
            <button onClick = {this.childCallback} className = "btn btn-primary">Pass data to Parent through Callback function</button>
        </div>
    }
}

export default Child;