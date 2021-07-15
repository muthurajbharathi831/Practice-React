import React from 'react'
import Childwithhoc from './Childwithhoc'
import myHoc from './Hoc'

class Parentwithhoc extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name : '',
            count : 0
        }
    }

    render (){
        return <div className = "container mt-5 ">
            <button className = "btn btn-primary" onClick = {this.props.update}>{this.props.name} Clicked me {this.props.count} times</button>
            <Childwithhoc/>
        </div>

    }
}

export default myHoc(Parentwithhoc,{
    name : "Button Click demo",
    counter : 21
});