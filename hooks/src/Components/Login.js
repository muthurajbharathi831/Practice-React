import React, {useState}  from 'react'

const Login = () => {
    const [userData,setData] = useState(
    {
        name : '',
        password : ''
    });

    const display = ()=> {
        console.log(userData.name,userData.password);
    }

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
                                                setData({
                                                ...userData,
                                                   name:e.target.value
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
                                                setData({
                                                    ...userData,
                                                    password:e.target.value
                                                })
                                            }}
                                            />
                                        </div>
                                        <div className="card-footer">
                                            <button className = "btn btn-primary" onClick = {display}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <h3>User : {userData.name}</h3>
    </div>
}

export default Login;