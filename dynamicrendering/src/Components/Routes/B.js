import React from 'react'
import myContext from './Context'
import C from './C'

class B extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userdata : []
        }
    }

    
    render(){
        return <div className= "container mt-5">
            <div className = "row">
                <table>
                    <thead>
                        <tr>
                            <th>Street</th>
                            <th>Suite</th>
                            <th>Zipcode</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                <myContext.Consumer>
                    {
                        (contextData) => {
                            console.log(contextData.userdata);
                            contextData.userdata.map((item,index) => {
                                    return  <tr>
                                                <td>{item.address.street}</td>
                                                <td>{item.address.suite}</td>
                                                <td>{item.address.zipcode}</td>
                                                <td>{item.company.name}</td>
                                            </tr>
                                    
                                }) 
                        }
                    }
                </myContext.Consumer>
                </tbody>
                </table>
                <C/>
            </div>
            
        </div>
    }
}

export default B;