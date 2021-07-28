import React from 'react'
import {connect} from 'react-redux'

class Comments extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userComments : []
            
        }
    }

    render(){
        return <div className = "container">
            
                {
                    this.state.userComments.length > 0 ?  <div className = "row align-items-start"> {
                        this.state.userComments.map((item,index)=> {
                        
                            
                            return  <div className ="col-sm-4 mt-5">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">{item.id}</h5>
                                                <h5 className="card-title">{item.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                                                <p className="card-text">{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                    </div> : <h3>No Data found</h3>
                }
            
        </div>
    }

    componentDidMount(){
        this.setState({
            userComments : this.props.post
        })
    }
}

const mapStatetoProps = (storeData) => {
    return {
        post : storeData.myReducer.posts
    }
}

export default connect(mapStatetoProps,null)(Comments);