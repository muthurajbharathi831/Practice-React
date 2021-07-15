import React from 'react'
import myAction from '../../Action/Action'

class Username extends React.Component {
    constructor(){
        super()
        this.state = {
            name : ""
        }
    }
    
    updateName = (Enteredname) => {
        this.setState({
            name : Enteredname
        })
        
    }

    storeData = ()=> {
        myAction(this.state.name,"NAME")
    }

    render(){
        return <div className = "container">
            <div class="col align-self-center">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" 
                onChange = {(e) => {
                    this.setState({
                        name : e.target.value
                    })
                }}
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="username"/>
            </div>
            <button onClick = {this.storeData} className = "btn btn-primary"> Save </button>
            </div>
        </div>
    }
    
}

export default Username;