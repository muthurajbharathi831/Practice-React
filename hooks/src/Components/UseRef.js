import React , {useRef} from 'react'

export default function UseRef() {
    let userNameRef = useRef();
    let passwordRef = useRef();
    
    const print = () => {
        let userName = userNameRef.current.value;
        let password = passwordRef.current.value;
        console.log(userName,password);
    }

    return (
        <div className = "container">
            <h3>Useref Demo</h3>
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
                                            ref = {userNameRef}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label  className="form-label">Password</label>
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            id="exampleFormControlInput2" 
                                            placeholder="password"
                                            ref = {passwordRef}
                                            />
                                        </div>
                                        <div className="card-footer">
                                            <button className = "btn btn-primary" onClick = {print}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
        </div>
    )
}
