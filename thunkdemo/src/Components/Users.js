import React from 'react'
import {connect} from 'react-redux'

class Users extends React.Component {
    constructor (props){
        super ()

        this.state = {
            users : []
        }
    }
    componentDidMount = (props) => {
        this.setState({
            users : this.props.users
        })
    }

    render() {
        return <div className = "container">
            
                {
                    this.state.users.length > 0 ? <div className = "row">
                        {
                            this.state.users.map((item,index) => {
                                return <div className = "col-sm-3">
                                    <div class="card" >
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{item.username}</p>
                                            <a href="#" class="btn btn-primary">{item.company.catchPhrase}</a>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div> : <h4>No Data Found</h4>
                }
            
        </div>
    }
}

const mapStatetoProps = (storeData) => {
    return {
        users : storeData.myReducer.users
    }
}

export default connect(mapStatetoProps,null)(Users)