import React, { Component } from 'react'
import Childwithhoc from './Childwithhoc'
import Hoc from './Hoc'

class Parentwithhoc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className = "container mt-5">
                <div className = "row ">
                <h3>Higher Order Component State Counter Demo</h3>

                    <div className = "col-sm-12">
                        <button onClick = {this.props.update} >{this.props.componentName} Clicked me {this.props.count}</button>
                    </div>
                </div>
                <Childwithhoc/>
            </div>

        )
    }
}

export default Hoc(Parentwithhoc,{
    name:"Button click component for HOC demo",
    counter: 20
})
