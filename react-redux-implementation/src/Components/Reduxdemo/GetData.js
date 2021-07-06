import React from 'react'
import Axios from 'axios'



class GetData extends React.Component {
    constructor(){
        super()
        this.state = {
            userdata : []
        }
    }

    render() {
        return <div className = "container"> 
                {

                   this.state.userdata.length > 0 ? <div>
                       <table >
                        <thead className = "bg-dark text-white">
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    City
                                </th>
                                <th>
                                    Company Name
                                </th>
                            </tr>
                        </thead>
                        <tbody> {
                            this.state.userdata.map((item,index)=> {
                                return  <tr className = "text-blue">
                                            <td> {item.name}</td>
                                            <td> {item.email}</td>
                                            <td> {item.address.city}</td>
                                            <td> {item.company.name}</td>
                                        </tr>         
                            })
                        }
                            
                        </tbody>
                    </table> 
                   
                    </div>
                    : <h3>No Data Available</h3>
                }
        </div>
    }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.setState({
                userdata :response.data
            })
        },(error) => {
            console.log(`Error is ${error}`);
        })
    }
}

export default GetData;