import React,{Component} from 'react'
import person from '../../Data/PersonInfo'
import Axios from 'axios'
class StateComp extends Component {
    constructor (){
        super()

        this.state = {
            info : person,
            data : []
        }
    }

    updateState = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            
            console.log(response.data[0]);
            this.setState({
                data: response.data
            })
        },(errorMsg)=>{
            console.log(errorMsg);
        })
    }
    
    render (){
        return (
            <div>
                {/* <h4>Name:{this.state.info.name}</h4>
                <p>City: {this.state.info.address.city}</p>
                <p>Email:{this.state.info.email}</p>
                
                <p>Mobile: {this.state.info.contactDetails.mobile}</p>
                <p>Landline:{this.state.info.contactDetails.landline}</p>
                <p>Flat : {this.state.info.address.flat}</p>
                <p>Street : {this.state.info.address.street}</p>
                <p>Pin : {this.state.info.address.pin}</p>
                <p>Dob : {this.state.info.dob}</p>
                <p>Name from Json Placeholder : {this.state.data.name}</p>
                <p>UserName from Json Placeholder : {this.state.data.username}</p> */}
                
                <p>Name from Json Placeholder :  {this.state.data.name}</p>
                  
                <button class= "btn btn-primary" onClick={this.updateState}>Update</button>
            </div>
        )
    }
}

export default StateComp;