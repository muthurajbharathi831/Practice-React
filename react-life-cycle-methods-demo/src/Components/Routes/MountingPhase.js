import React from 'react'

class MountingPhase extends React.Component {
    static getDerivedStateFromProps(){
        console.log('This is getDerivedstatefromProps');
    }
    constructor(){
        console.log('This is constructor');
        super()
    }

    componentDidMount(){
        console.log('This is componentDidMount');
    }

    render(){
        console.log('This is Render');
        return <div class = "container">
            <p>This is Mounting Phase</p>
        </div>
    }
}

export default MountingPhase;