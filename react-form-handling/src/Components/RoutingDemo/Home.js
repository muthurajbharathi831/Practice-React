import React from 'react'



class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "",
            city: ""
        }
    }

    render(){
        return <div className = "container">
            <p>This is Home Page</p>

        </div>
    }
}

export default Home;