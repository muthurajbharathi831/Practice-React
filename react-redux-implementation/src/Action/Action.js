import myStore from '../Store/Store'

const myAction = (data,type) => {
    //calls all the reducers
    if(type === "USER"){
        myStore.dispatch({
            type : "USER",
            payload : data
        })
    } else if(type === "POST"){
        myStore.dispatch({
            type : "POST",
            payload : data
        })
    }
    
}

export default myAction;