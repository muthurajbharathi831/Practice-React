import React from 'react'

const myHoc = (Comp,args) => {
    class myHocImpl extends React.Component {
        constructor(){
            super()
            this.state = {
                name : args.name,
                count : args.counter
            }
        }
        update = ()=> {
            this.setState({
                count : this.state.count + 1
            })
        }

        render(){
            return <Comp name = {this.state.name} count = {this.state.count} update = {this.update}/>
        }
    }
    return myHocImpl;
}

export default myHoc;