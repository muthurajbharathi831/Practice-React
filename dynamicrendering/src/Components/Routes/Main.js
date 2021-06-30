import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

import Dynamicrender from './GetData'

import userComments from './Comments'
import B from './B'

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
                   
                    <Route path = "/Users" component = {Dynamicrender}/>
                    <Route path = "/UserComments" component = {userComments}/>
                    <Route path = "/B" component = {B}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default Main;