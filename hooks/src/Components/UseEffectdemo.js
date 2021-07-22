import React, {useState,useEffect} from 'react'

const useEffectdemo = ()=> {
    const [name,setName] = useState("Muthu")

    const updateName = ()=> {
        setName("Muthu raj")
    }

    useEffect(() => {
        console.log("useEffect with second parameter will be called on componentDidMount only");
        return ()=> {
            console.log("componentWillUnMount");
        }
    },[])

    useEffect(() => {
        console.log("useEffect with single callback function triggered on componentDidMount and componentDidUpdate" );
    })

    return <div className = "container">
        {console.log("render")}
        <p>Name : {name}</p>
        <button className = "btn btn-primary" onClick = {updateName}> update name</button>
    </div>
}

export default useEffectdemo;