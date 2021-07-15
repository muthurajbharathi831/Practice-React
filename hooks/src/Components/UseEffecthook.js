import React, {useState,useEffect} from 'react'
import axios from 'axios'

const UseEffecthook = () => {
    const [photos,setPhotos] = useState([])

    //will be called on componentDidMount and componentDidUpdate
    useEffect(()=>{
        console.log("useEffect1");
    })

    //will be called on componentDidMount only
    useEffect(() => {
        console.log("useEffect2");
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=> {
            setPhotos(response.data)
        },(error)=>{
            console.log("Error is : "+error);
        })
        return () => {
            //will be called on componentWillUnmount
            alert("componentWillUnmount");
        }
    },[])

    return <div className= "container">
        {console.log("render")}
        {
            photos.length > 0 ? <div className = "row">
                {
                    photos.map((data,index) => {

                        return <div className = "row"> 
                        <div className = "col-4">
                            <div className="card" >
                                    <img src={data.url} className="card-img-top" alt="..."/>
                                    
                                </div>
                                </div>
                                <div className = "col-8">
                                    <ul className = "mt-5">
                                        <li>{data.id}</li>
                                        <li>{data.title}</li>
                                    </ul>
                                </div>
                                </div>
                    })
                }
             </div>: <h3>Data not available</h3>
        }
    </div>
}

export default UseEffecthook;