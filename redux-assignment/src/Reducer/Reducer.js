import userInfo from '../initData/initData'

const myReducer = (state = userInfo, action) => {
    switch(action.type) {
        case "NAME" : state = {
            ...state,
            name : action.payload
        };break
        case "MOBILE" : state = {
            ...state,
            mobile : action.payload
        }
    }

    return state;
}

export default myReducer;