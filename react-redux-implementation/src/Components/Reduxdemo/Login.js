import React from 'react'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password:''
        }
    }

    print = () => {
        console.log(this.state);
    }

    render(){
        return <div className = "container"> 
                    <div className = "row">
                        <div className = "col-4"></div>
                            <div className = "col-4">
                                <div className="card mt-5"  >
                                    <div className="card-header">
                                        Login
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label  className="form-label">Username</label>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput1" 
                                            placeholder="username"
                                            onChange = {(e) => {
                                                this.setState({
                                                    username:e.target.value
                                                })
                                            }}/>
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Password</label>
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            id="exampleFormControlInput2" 
                                            placeholder="password"
                                            onChange = {(e) => {
                                                this.setState({
                                                    password:e.target.value
                                                })
                                            }}
                                            />
                                        </div>
                                        <div className="card-footer">
                                            <button className = "btn btn-primary" onClick = {this.print}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
    }
}

export default Login;