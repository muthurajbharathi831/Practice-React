import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom' 

import Navbar from './Navbar'
import LoginPageComponent from './Login'
import HomePageComponent from './Home'
import AboutComponent from './About'
import RegistrationformPageComponent from  './Registrationform'
import Users from './GetData'
import Comments from './Comments'

class Main extends React.Component{
    constructor(){
        super()

    }

    render(){
        return <BrowserRouter>
        <Navbar/>
            <Switch>
                    <Route exact path = "/" component = {HomePageComponent}/>
                    <Route path = "/Home" component = {HomePageComponent}/>
                    <Route path = "/Login" component = {LoginPageComponent}/>
                    <Route path = "/Register" component = {RegistrationformPageComponent}/>
                    <Route path = "/About" component = {AboutComponent}/>
                    <Route path = "/Users" component = {Users}/>
                    <Route path = "/Comments" component = {Comments}/>
            </Switch>
        </BrowserRouter>
    }
}

export default Main;