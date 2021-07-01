import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './A'
import Parentwithhoc from './Parentwithhoc'
import HocDemo from './Parentwithhoc'

class Main extends React.Component {
    constructor(){
        super()
    }

    render(){
        return <div className = "container">
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route  path = "/Home" component = {Home}/>
                    <Route path ="/Hoc" component = {HocDemo}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default Main;