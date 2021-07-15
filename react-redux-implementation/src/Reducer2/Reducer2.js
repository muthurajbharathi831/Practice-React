import initData2 from '../initData2/initdata2'
const myReducer2 = (state = initData2,action) => {
    switch(action.type) {
        case 'PHOTOS' : 
            state = {
                ...state,
                photos : action.payload
            }
    }
    return state;
}

export default myReducer2;