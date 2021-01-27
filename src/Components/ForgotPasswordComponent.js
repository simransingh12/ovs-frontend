import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import validator from 'validator'
export class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             phoneNo:'',
             password:'',
             confirmPassword:'',
             disabled: true
        }
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.verify=this.verify.bind(this);
        this.save=this.save.bind(this);
    }

    changeEmailHandler = (event) => {   
        this.setState({ email: event.target.value });
    }
    changePhoneNoHandler = (event) => {
        this.setState({ phoneNo: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }
    
    validate=()=>{
        let isError=false;

        if (!validator.isEmail(this.state.email)) {
            isError = true;
            alert("Please enter a valid email id!")
        }

        if (this.state.phoneNo.length !== 0) {
            
            if (!this.state.phoneNo.match(/^[0-9]{10}$/)) {
                isError = true;
                alert("Please enter valid phone number!")  
            }
            
        }
        else{
            alert("Phone number cannot be empty")
            isError = true;
        }

        return isError;

    }

    verify=(e)=>{
        e.preventDefault();
        const err=this.validate();
        if(!err){
            CustomerService.verifyPhoneNo(this.state.email,this.state.phoneNo).then(res=>{
                this.setState( {disabled: false} )
            })
            .catch(function (error) {
                alert("Incorrect Phone number. User not verified!")
            })
        }
    }

    validatePassword=()=>{
        let isError=false;
        if (this.state.password.length!==0) {

            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                alert("Please enter secure and strong password");
                isError = true;
            }

        }
        else{
            alert("Password cannot be empty")
            isError = true;
        }
        
        if (this.state.password !== this.state.confirmPassword) {
            isError = true;
            alert('Confirm password doesnot match!')
        }

        return isError;
    }

    save=(e)=>{
        e.preventDefault();
        const err=this.validatePassword();
        if(!err){
            CustomerService.updatePassword(this.state.email,this.state.password).then(res=>{
                alert("New Password generated successfully!")
                this.props.history.push('/login')
            })
        }
    }

    cancel=()=>{
        this.props.history.push('/Login')
    }

    render() {
        return (
            <div>
                <div className="bgBox" style={{alignItems:'center',height:'660px',top:'220px'}}>
                        
                    <p className="heading" style={{ position: 'relative', left: '150px', top: '0px' }}>Forgot Password</p>
                    <p style={{ position: 'relative', left: '150px', top: '-20px' }}>Enter email Id:</p>
                    <input placeholder="email" className="txtbox" style={{ left: '130px', top: '110px' }} value={this.state.email} name='email' onChange = {this.changeEmailHandler}></input>
                    <p style={{ position: 'relative', left: '150px', top: '40px' }}>Enter Phone Number:</p>
                    <input placeholder="Phone Number" className="txtbox" style={{ left: '130px', top: '230px' }} value={this.state.phoneNo} name='phoneNo' onChange={this.changePhoneNoHandler}></input>
                    <p style={{ position: 'relative', left: '150px', top: '150px' }}>Enter New Password:</p>
                    <input type="password" placeholder="Password" className="txtbox" style={{ left: '130px', top: '400px' }} value={this.state.password} name='password' onChange={this.changePasswordHandler}  disabled={this.state.disabled} ></input>
                    <p style={{ position: 'relative', left: '150px', top: '210px' }}>Confirm Password:</p>
                    <input type="password" placeholder="Confirm Password" className="txtbox" style={{ left: '130px', top: '520px' }} value={this.state.confirmPassword} name="confirmPassword" onChange={this.changeConfirmPasswordHandler} disabled={this.state.disabled} ></input>
                    <button className="btn btn-success" style={{ left: '90px', top: '600px' }} onClick={this.save} disabled={this.state.disabled}>Save</button>
                    <button className="btn btn-danger" style={{ left: '300px', top: '600px' }} onClick={this.cancel}>Cancel</button>
                    <button className="btn btn-info" style={{ left: '200px', top: '300px' }} onClick={this.verify}>Verify</button>
                </div>
            </div>
        )
    }
}

export default ForgotPasswordComponent
