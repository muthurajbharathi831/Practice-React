import React from 'react'

class UnmountingPhase extends React.Component {
    constructor(){
        console.log("This is Contructor");
        super()
    }

    render(){
        console.log("This is Render");
        return <div className = "container">
            <p>This is UnMounting Phase Component</p>
        </div>
    }

    componentWillUnmount(){
        alert("ComponentUnMount");
        console.log("This is ComponentUnmount");
    }
}

export default UnmountingPhase;