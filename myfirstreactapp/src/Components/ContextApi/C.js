import React from 'react'
import D from './D'
import myContext from './Context'

class C extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"",
            city:""
        }
    }

    render (){
        return <div>
            <h3>C Component</h3>
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
            <D/>
        </div>
    }
}

export default C;