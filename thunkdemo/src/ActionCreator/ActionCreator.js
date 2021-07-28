import Axios from 'axios'

const ActionCreator = () => {
    return (dispatch,getStore) => {

        let entireStoredata = getStore()
        Axios.get("https://jsonplaceholder.typicode.com/users").then((resp)=>{
            //here we can compare existing store data with server received data if they are different then we can dispatch 
            //otherwise don't
            dispatch({
                type : "USER",
                payload : resp.data

            })
        },(errorMsg)=>{
            console.log("There was Error ",errorMsg);
        })
    }
}

export default ActionCreator;