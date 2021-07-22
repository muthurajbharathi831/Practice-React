import React, {useReducer} from 'react'

let initState = {
    a: 0,
    b: 100,
    c: 1000
}

const myReducer = (state,action) => {
    switch(action.type) {
        case 'a' :
            state = {
                ...state,
                a : action.payload
            }
            break;
        case 'b' :
            state = {
                ...state,
                b : action.payload
            }
            break;
        case 'c' :
            state = {
                ...state, 
                c : action.payload
            }
            break;    
    }

    return state;
}


const UseReducer = () => {
    const [state,dispatch] = useReducer(myReducer,initState)

    return <div className="container">
        <h3 className = "mt-5">{state.a}</h3>
        <button className = "mt-5" 
        onClick = {()=> {
            dispatch({
                type : 'a',
                payload : state.a +1
            })
        }}
        >A state modifier</button>
        <h3 className = "mt-5" >{state.b}</h3>
        <button onClick = {()=> {
            dispatch({
                type : 'b',
                payload : state.b + 1
            })
        }} className = "mt-5" >B state modifier</button>
        <h3 className = "mt-5" >{state.c}</h3>
        <button  onClick = {()=> {
            dispatch({
                type : 'c',
                payload : state.c +1
            })
        }} className = "mt-5" >C state modifier</button>
    </div>
}

export default UseReducer;