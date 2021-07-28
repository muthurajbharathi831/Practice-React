import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from '../ActionCreator/ActionCreator'

class Home extends React.Component {
    constructor(props){
        super()
    }

    componentDidMount = () => {
        this.props.Actioncreator()
    }

    render(){
        return <div className = "container">
            <h3>This is Home component where we make Server requests and store in Redux state management</h3>
        </div>
    }
}

export default connect(null,(dispatch) => {
    return  {
        Actioncreator : bindActionCreators(ActionCreator,dispatch)
    }
})(Home)