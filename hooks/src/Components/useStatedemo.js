import React, {useState} from 'react'

const UseStatedemo = ()=> {
    const [data,updateData] = useState("A2n")
    const [userdata,updateUserdata] = useState(
        { 
            name:"Muthu",
            city : "Bangalore"
        })
    const [employees,updateEmployees] = useState(["A","B","C","D","E"])    

    

    const Update = () => {
        updateData("A2n Academy")
        updateUserdata({
            name : "Muthu Raj",
            city : "Mysore"
        })
    }

    return <div className = "container">
        <div className = "row">
                <h3>Welcome to {data}</h3>
                <h3>This is {userdata.name} from {userdata.city}</h3>
                <button className = "btn btn-primary" onClick = {Update}>Update</button>
        </div>
    </div>
}

export default UseStatedemo;
