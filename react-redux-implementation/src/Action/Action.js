
import myStore from '../Store/Store'

const myAction = (userdata) => {
    myStore.dispatch({
        type:"USER",
        payload:userdata
    })
}

export default myAction;