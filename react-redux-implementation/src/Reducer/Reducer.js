import initData from '../initData/initData'

const myReducer = (state=initData,action)=> {
    switch(action.type) {
        case 'USER' : 
            state = {
                ...state,
                user : action.payload
            }
    }

    return state;
}

export default myReducer