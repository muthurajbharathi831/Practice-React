import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Login from './Login'
import Register from './Register'

class Main extends React.Component {
    constructor(){
        super()
    }

    render(){
        return  <React.Fragment> 
        
        <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path = "/" component = {Login} />
                    <Route path = "/Home" component= {Home}/>
                    <Route path = "/About" component = {About}/>
                    <Route path = "/Login" component = {Login}/>
                    <Route path = "/Register" component = {Register}/>
                </Switch>
        </BrowserRouter>
        </React.Fragment>
    }
}

export default Main;