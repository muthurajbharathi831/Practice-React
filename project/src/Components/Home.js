import React from 'react'

class Home extends React.Component {
    constructor(){
        super()
        var myCarousel = document.querySelector('#carouselExampleDark')
        //var carousel = new bootstrap.Carousel(myCarousel)
    }
    
    render () {
        return <div className = "container">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://picsum.photos/seed/picsum/100/50" className="d-block w-100 h-50" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src="https://picsum.photos/seed/picsum/100/50" className="d-block w-100 h-50" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://picsum.photos/seed/picsum/100/50" className="d-block w-100 h-50" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>[]
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
<div className = "row mt-5">
    <div className = "col-sm-4">
        <div className="card" >
            <img src="https://loremflickr.com/640/360" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div >
    <div className = "col-sm-8">
        <div className="card" >
            
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div >
    <div className = "col-sm-8 mt-5">
        <div className="card" >
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div >
    <div className = "col-sm-4">
        <div className="card" >
            <img src="https://loremflickr.com/640/360" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div >
    <div className = "col-sm-4 mt-5">
        <div className="card" >
            <img src="https://loremflickr.com/640/360" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div >
    <div className = "col-sm-8 mt-5">
        <div className="card" >
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div >
</div>

<div className="card mt-5">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    }
}

export default Home;