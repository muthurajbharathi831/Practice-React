import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom' 

import Navbar from './Navbar'

import Home from './Home'
import Users from './Users'
import Comments from './Comments'

class Main extends React.Component{
    constructor(){
        super()

    }

    render(){
        return <BrowserRouter>
        <Navbar/>
            <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/Users" component = {Users} />
                    <Route path = "/Comments" component = {Comments}/>
            </Switch>
        </BrowserRouter>
    }
}

export default Main;