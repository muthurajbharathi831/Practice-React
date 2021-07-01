import React from 'react'

const Hoc = (Comp,args) => {
    class HigherOrderComp extends React.Component {
        constructor (props){
            super(props)
            this.state = {
                count : args.counter
            }
        }

        updateState = ()=> {
            console.log("called ",args.counter);
            console.log("count "+this.state.count);
            this.setState({
                count : this.state.count + 1
            })
        }

        render() {
            return <Comp componentName = {args.name} count = {this.state.count} countInit = {args.counter} update = {this.updateState}/>
        }
    }
    return HigherOrderComp
}

export default Hoc;