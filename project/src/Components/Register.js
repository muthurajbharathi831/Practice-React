import React from 'react'

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            username: "",
            mobile:"",
            coursesEnrolled:"",
            radio: "",
            about:""

        }
    }

    render(){
        return <div className = "container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="mobile"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" >
                            Default checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="flexCheckChecked" 
                            checked
                        />
                        <label className="form-check-label" >
                            Checked checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="radiotextvalue1" 
                            id="flexRadioDefault1"
                            value="radiotextvalue1"
                        />
                        <label className="form-check-label" >
                            Default radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="radiotextvalue2" 
                            value="radiotextvalue2"
                            id="flexRadioDefault2" 
                            checked
                        />
                        <label className="form-check-label" >
                            Default checked radio
                        </label>
                    </div>
                    <div className="mb-3">
                        <label  class="form-label">About</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input type="submit" className = "btn btn-primary" value="Submit" />
                </form>

               </div>
    }
}

export default Register;