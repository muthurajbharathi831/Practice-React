import React from 'react'
import Axios from 'axios'
import myStore from '../../Store/Store'


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
                                    Website
                                </th>
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
                                            <td> {item.website}</td>
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
        this.setState({
            userdata : myStore.getState().myReducer.user
        })
    }
}

export default GetData;