import React from 'react'

import  InitData  from '../InitData/InitData'

const myReducer = (state = InitData, action) => {
    switch(action.type) {
        case 'USER' :
            state = {
                ...state,
                users : action.payload
            }
            break;
    }
    return state;
}

export default myReducer;