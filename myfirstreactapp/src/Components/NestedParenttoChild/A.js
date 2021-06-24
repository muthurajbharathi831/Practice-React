import React from 'react'
import B from './B'

class A extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Name from A",
            city: "City from A"

        }
    }
    render (){
        return <div>
            <h2>Component A </h2>
            <p>Name : {this.state.name}</p>
            <p>City : {this.state.city}</p>
            <B name = {this.state.name} city = {this.state.city}/>
        </div>
    }
}

export default A;