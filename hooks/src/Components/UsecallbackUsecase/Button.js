import React from 'react'

const Button = (props) => {

    return <div className = "container">
        {console.log("Button ", props.children)}
    <button onClick = {props.fn}>{props.children}</button>

    </div>
}

export default Button;