import React from 'react'
import E from './E'

class D extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"",
            city:""
        }
    }

    render (){
        return <div>
            <h3>D Component</h3>
            <E/>
        </div>
    }
}

export default D;