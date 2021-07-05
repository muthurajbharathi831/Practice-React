import React from 'react'
import myContext from './Context'

class C extends React.Component {
    constructor(){
        super()
        this.state = {
            userdata : []
        }
    }

    render(){
        return <div className = "container">
            <div className="row">
                <myContext.Consumer>
                    {
                        (contextdata) => {
                            console.log(contextdata.userdata);
                            return contextdata.userdata.map((item,index)=>{
                                return <div className = "col-sm-4">
                                    <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{item.address.suite}</h6>
                                                <p className="card-text">{item.company.name}</p>
                                            </div>
                                        </div>
                                </div>
                            })
                        }
                    }
                </myContext.Consumer>
            </div>

        </div>
    }
}

export default C;