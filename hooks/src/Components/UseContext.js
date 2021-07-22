import React, {useState} from 'react'
import myContext from './Context'
import UseContextChild from './UseContextChild'

const UseContext = () => {
    const [initialData, settingData] = useState({
                name : "Muthu",
                location : "Bangalore"
            })

    return <div className = "container">
        <h3>Parent Component</h3>
        <h3>Name : {initialData.name} </h3>
        <h3>Location : {initialData.location} </h3>
        <myContext.Provider value = {initialData}>
            <UseContextChild/>
        </myContext.Provider>
    </div>        
}

export default UseContext;