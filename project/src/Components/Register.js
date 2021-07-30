import React from 'react'

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            username: "",
            mobile:"",
            password : "",
            code : "",
            coursesEnrolled:[],
            course1 : "",
            course2 : "",
            course3 : "",
            radio: "",
            about:"",
            userNameErr : "",
            mobilenumErr : "",
            passwordErr : "",
            codeErr : "",
            coursesEnrolledErr : "",
            radioInputErr : "",
            aboutErr : "",
            mailSubscribe : false
            

        }

        
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(this.validate()){
            console.log(this.state);
        }
    }

    validate = () => {
        let userNameErr = "";
        let passwordErr = "";
        let mobilenumErr = "";
        let codeErr = "";
        let aboutErr = "";
        let coursesEnrolledErr = "";
        let radioInputErr = "";

        if(!this.state.username.includes("@")){
            userNameErr = "Username should contain @"
        }
        if(this.state.password.length ==0){
            passwordErr ="password is mandatory";
        }
        if(this.state.mobile.length == 0){
            mobilenumErr = "Please Enter mobile number"
        }
        if(this.state.code.length == 0){
            codeErr = "Please select code";
        }
        if(this.state.radio.length == 0){
            radioInputErr = "Please select radio input"
        }
        if(this.state.about.length <=10 ){
            aboutErr = "Please enter about"
        }
        if(this.state.coursesEnrolled.length <=1 || (this.state.coursesEnrolled[0].length == 0 ) && (this.state.coursesEnrolled[1].length == 0 )(this.state.coursesEnrolled[2].length == 0 )){
            coursesEnrolledErr = "Courses enrolled is Mandatory"
        }

        if(userNameErr || passwordErr || mobilenumErr || codeErr || aboutErr || radioInputErr || coursesEnrolledErr) {
            this.setState({
                userNameErr,passwordErr,mobilenumErr,codeErr,aboutErr,radioInputErr,coursesEnrolledErr
            })
            return false;
        }
    }

    handleCommonValuesUpdate = (event) => {
            let name = event.target.name;
            let value = event.target.value;
            if(event.target.type !== "checkbox"){
                this.setState(
                    {
                        [name]:value
                    },
                    ()=> console.log("Other logs field : "+name + " value "+value)
                );
            } else {
                if(event.target.name !== "mailSubscribe"){
                    let dummyVar = "";
                    if(event.target.checked){
                        dummyVar = event.target.value;
                    }

                    this.setState(
                        {
                            [name] : {dummyVar},
                        },    
                            ()=> {
                                this.setAssetList(name,dummyVar)
                                console.log("name "+name + " value "+dummyVar)
                            
                            }
                        
                    )
                } 
                else {
                    this.setState({
                        [name] : event.target.checked
                    }, ()=> console.log("subscribe to mail "+name + " value "+value))
                }

            }
    }

    setAssetList = (name,value) => {
        if(name === "course1") {
            this.setState({
                coursesEnrolled : [value,this.state.course2,this.state.course3]
            })
        } else if(name === "course2") {
            this.setState({
                coursesEnrolled : [this.state.course1,value,this.state.course3]
            })
        } else if(name === "course3") {
            this.setState({
                coursesEnrolled : [this.state.course1,this.state.course2,value]
            })
        }
        console.log("Enrolled courses "+name + " value "+value);
    }

    render(){
        return <div className = "container">
                <div className = "row">
                <div className = "col-sm-4"></div>
                <div className = "col-sm-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text"
                         className="form-control"
                          id="exampleFormControlInput1" 
                          placeholder="username"
                          name = "username"
                          value = {this.state.username}
                          onChange = {this.handleCommonValuesUpdate}
                          />
                          <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.userNameErr}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input 
                        type="number"
                         className="form-control"
                          id="exampleFormControlInput2"
                           placeholder="mobile"
                           name = "mobile"
                           value = {this.state.mobile}
                           onChange = {this.handleCommonValuesUpdate}
                           />
                        <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.mobilenumErr}</div>

                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password"
                         className="form-control" 
                         id="exampleFormControlInput2"
                          placeholder="password"
                          name = "password"
                          value = {this.state.password}
                          onChange = {this.handleCommonValuesUpdate}
                          />
                        <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.passwordErr}</div>

                    </div>
                    <select class="form-select" aria-label="Default select example" name = "code" value = {this.state.code} onChange = {this.handleCommonValuesUpdate}>
                        <option value = "" selected>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.codeErr}</div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="c1" 
                            id="flexCheckDefault"
                            name = "course1"
                            checked = {this.state.course1}
                            onChange = {this.handleCommonValuesUpdate}
                        />
                        <label className="form-check-label" >
                            Default checkbox
                        </label>
                        
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="c2" 
                            id="flexCheck1" 
                            name = "course2"
                            checked = {this.state.course2}
                            onChange = {this.handleCommonValuesUpdate}
                            checked
                        />
                        <label className="form-check-label" >
                            Checked checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="c3" 
                            id="flexCheck3"
                            name = "course3"
                            checked = {this.state.course3}
                            onChange = {this.handleCommonValuesUpdate} 
                            
                        />
                        <label className="form-check-label" >
                            Checked checkbox
                        </label>
                        <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.coursesEnrolledErr}</div>

                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="radio" 
                            id="flexRadioDefault1"
                            value="F"
                            onChange = {this.handleCommonValuesUpdate}
                            checked = {this.state.radio === "F"}
                        />
                        <label className="form-check-label" >
                            Default radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="radio" 
                            value="M"
                            onChange={this.handleCommonValuesUpdate}
                            checked = {this.state.radio === "M"}

                            id="flexRadioDefault2" 
                            checked
                        />
                        <label className="form-check-label" > 
                            Default checked radio
                        </label>
                        <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.radioInputErr}</div>

                    </div>
                    <div className="mb-3">
                        <label  class="form-label">About</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        name = "about"
                        value={this.state.about}
                        onChange={this.handleCommonValuesUpdate}
                        ></textarea>
                        <div style = {{fontSize:10,color:"red",fontWeight:"bold",fontStyle:"italic"}}>{this.state.aboutErr}</div>

                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name = "mailSubscribe"
                            
                            checked={this.state.mailSubscribe}
                            onChange = {this.handleCommonValuesUpdate}
                            id="flexCheck4" 
                            
                        />
                        <label className="form-check-label" >
                            Subscribe to mail
                        </label>
                    </div>
                    
                    <input type="submit" className = "btn btn-primary" value="Submit" />
                </form>
                </div>
                </div>
               </div>
    }
}

export default Register;