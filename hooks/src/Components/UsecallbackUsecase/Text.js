import React from 'react'

const Text = (props) => {

    return  <div className = "container"> 
            {console.log("text ", props.text)}
            <h3>{props.text}</h3>
    </div>
}

export default Text;