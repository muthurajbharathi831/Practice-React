import React from 'react'

class UpdatePhase extends React.Component {
    static getDerivedStateFromProps(){
        console.log('This is getDerivedStateFromProps');
    }

    shouldComponentUpdate (){
        console.log('This is Should component update');
        return true; //if false execution stops here
    }   

    constructor(){
        console.log('This is constructor');
        super()

        this.state = {
            name:"Muthu"
        }
    }

    updateName = () => {
        console.log('This is updateName');
        this.setState({name:"Raj"})
    }

    render(){
        console.log('This is Render');
        return <div class= "container">
            <p>This is Update Phase</p>
            <button class = "btn btn-primary" onClick = {this.updateName}>Update state</button>
        </div>
    }

    getSnapshotBeforeUpdate(){
        console.log('This is getSnapshotbeforeUpdate');
    }

    componentDidUpdate () {
        console.log('This is componentDidUpdate');
    }
}

export default UpdatePhase;