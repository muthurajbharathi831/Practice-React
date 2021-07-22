import React, {useContext} from 'react'
import myContext from './Context'

const UseContextChild = () => {
    const dataFromcontext = useContext(myContext)

    return <div className = "container">
            <h3>Child Component</h3>
            <h4>Name from Parent through useContext : {dataFromcontext.name}</h4>
            <h4>Location from Parent through useContext : {dataFromcontext.location}</h4>
    </div>
}

export default UseContextChild;

