import React from 'react'

import Hoc from './Hoc'

class Childwithhoc extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return <div classsName = "container mt-5">
            <div className = "row mt-5">
                <div className = "col-sm-12">
                    <p onMouseOver = {this.props.update}> {this.props.componentName} Hovered me {this.props.count} times </p>
                </div>
            </div>
        </div>
    }
}

export default Hoc(Childwithhoc, {
    name:"Hover event component for Hoc demo",
    counter: 30
})