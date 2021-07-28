import React from 'react'
import {connect} from 'react-redux'

class Userdetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            mobile : ""
        }
    }

    render () {
        return <div className = "container">
            <h3>Name : {this.state.name}</h3>
            <h3>Mobile : {this.state.mobile}</h3>
        </div>
    }

    

    componentDidMount = () => {
        console.log(this.props.name);
        this.setState ({
            name : this.props.name,
            mobile : this.props.mobile
        })
    }
}

const mapStatetoProps = (storeData) => {

    return {
        name : storeData.myReducer.name,
        mobile : storeData.myReducer.mobile
    }
}

export default connect(mapStatetoProps,null)(Userdetails)