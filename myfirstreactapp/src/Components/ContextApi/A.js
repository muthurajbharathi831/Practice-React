import React from 'react'
import B from './B'

import myContext from './Context'

class A extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"Muthu",
            city:"Bangalore"
        }
    }

    updateState = () => {
        this.setState({
            name: "Raj",
            city: "Mysore"
        })
    }

    render (){
        return <div>

            <h3>A Component</h3>
            <button className = "btn btn-primary" onClick = {this.updateState}>Update state</button>
            <myContext.Provider value = {this.state}>

            <B/>
            </myContext.Provider>
        </div>
    }
}

export default A;