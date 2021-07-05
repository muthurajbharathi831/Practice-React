import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Mounting from './MountingPhase'
import Updating from './UpdatePhase'
import Unmounting from './UnmountingPhase'

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
                    <Route path = "/Mounting" component = {Mounting}/>
                    <Route path = "/Updating" component = {Updating}/>
                    <Route path = "/Unmounting" component = {Unmounting}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default Main;