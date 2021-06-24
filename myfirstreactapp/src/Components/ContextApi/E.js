import React from 'react'
import myContext from './Context'

class E extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"",
            city:""
        }
    }

    render (){
        return <div>
            <h3>E Component</h3>
            <myContext.Consumer>
                {
                    (contextData) => {
                        return <div>
                            <p>Name : {contextData.name}</p>
                            <p>City : {contextData.city}</p>
                        </div>
                    }
                }
            </myContext.Consumer>
        </div>
    }
}

export default E;