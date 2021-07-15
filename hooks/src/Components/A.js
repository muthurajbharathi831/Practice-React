import React, {useState} from 'react'
import B from './B'

const A = ()=> {
    const [data,setData] = useState({
        name : "Muthu",
        city : "Bangalore"
    })

    return <div classname = "container">
        <p>Parent  component </p>
        <h3>Name : {data.name}</h3>
        <B city = {data.city}/>
    </div>
}

export default A;