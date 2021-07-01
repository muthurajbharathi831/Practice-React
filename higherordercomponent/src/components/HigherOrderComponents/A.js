import React from 'react'
import B from './B'
import Parentwithhoc from './Parentwithhoc'

class A extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    updateState = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return <div className = "container mt-5">
            <div className = "row">
                <h3>Normal State Counter Demo</h3>
                <div className = "col-sm-12 text-align-center">
                    <button className = "btn btn-primary " onClick = {this.updateState}> Clicked me {this.state.count} times </button>
                </div>
            </div>
            <B/>
            <Parentwithhoc/>
          
            
        </div>
    }
}

export default A;