import React from 'react'
import C from './C'
import myContext from './Context'
class B extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"",
            city:""
        }
    }

    render (){
        return <div>
            <h3>B Component</h3>
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
            <C/>
        </div>
    }
}

export default B;