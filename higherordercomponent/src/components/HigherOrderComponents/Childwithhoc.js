import React from 'react'
import myHoc from './Hoc'

class Childwithhoc extends React.Component {
    constructor(){
        super()

        this.state = {
            name : '',
            count : 0
        }
    }

    render (){
        return <div className = "container mt-5">
            <p className = "text-white bg-dark" onMouseOver = {this.props.update}> {this.props.name}Hovered me {this.props.count} times</p>
        </div>

    }
}

export default myHoc(Childwithhoc,{
    name : "Text hover",
    counter : 32
});