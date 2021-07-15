import myStore2 from '../Store2/Store2'

const myAction2 = (myPhotos) => {
    myStore2.dispatch({
        type : "PHOTOS",
        payload : myPhotos
    })
}

export default myAction2;