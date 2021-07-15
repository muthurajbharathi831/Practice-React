import React from 'react'
import $ from 'jquery';
import axios from 'axios'
import myAction from '../../Action/Action'
import myAction2 from '../../Action2/Action2'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "",
            city: "",
            userdata : [],
            photos : [],
            posts : []
        }
    }

    render(){
        return <div className = "container">
            <p>This is Home Page</p>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="..." alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className = "row mt-5">
                <div className = "col-sm-4">
                    <div className="card" >
                        <img className="card-img-top" src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm-8">
                    <div className="card" >
                        
                        <div className="card-body">
                            
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row mt-5">
                <div className = "col-sm-8">
                    <div className="card" >
                        
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                <div className = "col-sm-4">
                    <div className="card" >
                        <img className="card-img-top" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row mt-4">
                <div className = "col-sm-3">
                    <div className="card" >
                        <img className="card-img-top" src="https://homepages.cae.wisc.edu/~ece533/images/pool.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm-3">
                    <div className="card" >
                        <img className="card-img-top" src="https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm-3">
                    <div className="card" >
                        <img className="card-img-top" src="https://homepages.cae.wisc.edu/~ece533/images/frymire.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm-3">
                    <div className="card" >
                        <img className="card-img-top" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
           
            <footer className="page-footer font-small blue">

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
          
            </footer>

        </div>
    }

     componentDidMount(){
    //     $('.carousel').carousel();
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            this.setState({
                userdata : response.data
            })
            myAction(response.data,"USER")
        },(error)=>{
            console.log("Error "+error);
        })

        axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
            this.setState({
                photos : response.data
            })
            myAction2(response.data)
        },(error)=>{
            console.log("Error "+error);
        })

        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            this.setState({
                posts : response.data
            })
            myAction(response.data,"POST")
        },(error)=>{
            console.log("Error "+error);
        })
    }
}

export default Home;