import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(){
        super()


    }

    render () {
        return <React.Fragment>
            <div className = "row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Login">React Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Register">Register</Link>
                        </li>
                        
                    </ul>
                   
                    </div>
                </div>
                </nav>
            </div>
        </React.Fragment>
    }
}

export default Nav;
