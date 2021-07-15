import myStore from '../Store/Store'

const myAction = (data,type) => {

    switch(type) {

        case 'NAME' : myStore.dispatch({
                type : 'NAME',
                payload : data
            });
            break;
        case 'MOBILE' : myStore.dispatch({
            type : 'MOBILE',
            payload : data
        });break;
    }
    
}

export default myAction;