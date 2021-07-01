import React from 'react'


class B extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    updateState = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return <div className = "container mt-5">
            <div className = "row">
                
                    <p  onMouseOver = {this.updateState}> Hovered on me {this.state.count} times </p>
            </div>
        </div>
    }
}

export default B;