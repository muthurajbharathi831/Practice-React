import React from 'react'
import myAction from '../../Action/Action'

class Phonenumber extends React.Component {
    constructor(){
        super()
        this.state = {
            mobile : ""
        }
    }
    
   storeData = ()=> {
        myAction(this.state.mobile,"MOBILE")
   }

    render(){
        return <div className = "container">
            <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="number" 
                onChange = {(e)=> {
                    this.setState({
                        mobile : e.target.value
                    })
                }} 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="mobile"/>
            </div>
            <button onClick = {this.storeData} className = "btn btn-primary"> Save </button>
        </div>
    }
    
}

export default Phonenumber;