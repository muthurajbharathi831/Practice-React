import React from 'react'

const Title = ()=> {

    return <div className = "container">
         {console.log("Title")} 
         <h3>usecallBack necessity</h3>
    </div>
}

export default React.memo(Title);