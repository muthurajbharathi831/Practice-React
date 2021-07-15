import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom' 

import Navbar from './Navbar'

import Username from './Username'
import Phonenumber from './Phonenumber'
import Userdetails from './Userdetails'

class Main extends React.Component{
    constructor(){
        super()

    }

    render(){
        return <BrowserRouter>
        <Navbar/>
            <Switch>
                    <Route exact path = "/" component = {Username}/>
                    <Route path = "/Username" component = {Username}/>
                    <Route path = "/Phonenumber" component = {Phonenumber}/>
                    <Route path = "/Userdetails" component = {Userdetails}/>
            </Switch>
        </BrowserRouter>
    }
}

export default Main;