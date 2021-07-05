import React from 'react'

class UpdatePhase extends React.Component {
    

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
    static getDerivedStateFromProps(){
        console.log('This is getDerivedStateFromProps');
    }

    updateName = () => {
        console.log('This is updateName');
        this.setState({name:"Raj"})
    }

    render(){
        console.log('This is Render');
        return <div className= "container">
            <p>This is Update Phase</p>
            <button className = "btn btn-primary" onClick = {this.updateName}>Update state</button>
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