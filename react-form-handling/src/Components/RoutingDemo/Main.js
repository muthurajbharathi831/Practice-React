import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom' 

import Navbar from './Navbar'
import LoginPageComponent from './Login'
import HomePageComponent from './Home'
import AboutComponent from './About'
import RegistrationformPageComponent from  './Registrationform'

class Main extends React.Component{
    constructor(){
        super()

    }

    render(){
        return <BrowserRouter>
        <Navbar/>
            <Switch>
                    <Route exact path = "/" component = {LoginPageComponent}/>
                    <Route path = "/Home" component = {HomePageComponent}/>
                    <Route path = "/Login" component = {LoginPageComponent}/>
                    <Route path = "/Register" component = {RegistrationformPageComponent}/>
                    <Route path = "/About" component = {AboutComponent}/>
            </Switch>
        </BrowserRouter>
    }
}

export default Main;