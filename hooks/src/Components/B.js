import React, {useState} from 'react'

const B = (props)=> {
    
    return <div classname="container">
        <p>Child component</p>
        <h3>city : {props.city}</h3>
    </div>
}
export default B;