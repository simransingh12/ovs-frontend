import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'
import validator from 'validator'
import { Link } from 'react-router-dom'
class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            address: '',
            phoneNo: '',
            confirmPassword: '',
            // usernameError: '',
            // passwordError: '',
            // emailError: '',
            // addressError: '',
            // phoneNoError: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    validate = () => {
        let isError = false;

        if (!validator.isEmail(this.state.email)) {
            isError = true;
            alert("Please enter a valid email id!")
        }

        if (this.state.username.length == 0) {
            isError = true;
            alert("Username cannot be empty!")
        }

        if (this.state.address.length == 0) {
            isError = true;
            alert("Address cannot be empty!")
        }


        if (this.state.phoneNo.length !== 0) {

            if (!this.state.phoneNo.match(/^[0-9]{10}$/)) {
                isError = true;
                alert("Please enter valid phone number!")
            }

        }

        else {
            alert("Phone number cannot be empty")
            isError = true;
        }

        if (this.state.password.length !== 0) {

            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                alert("Please enter secure and strong password");
                isError = true;
            }

        }

        else {
            alert("Password cannot be empty")
            isError = true;
        }

        if (this.state.password !== this.state.confirmPassword) {
            isError = true;
            alert('Confirm password doesnot match!')
        }

        return isError;
    }

    saveCustomer = (e) => {
        e.preventDefault();

        const err = this.validate();

        if (!err) {

            let customer = {
                email: this.state.email, username: this.state.username,
                address: this.state.address, phoneNo: this.state.phoneNo, password: this.state.password
            };

            console.log(JSON.stringify(customer));

            CustomerService.createCustomer(customer).then(res => {

                alert('Registration successfully done!')
                this.props.history.push('/login');

            }).catch(function (error) {

                alert("Given email is already registred")

            });
        }
    }
    cancel = () => {
        this.props.history.push('/login')
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
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

    render() {
        return (
            <div>

                <Link to="/" class="mypro">HOME</Link>

                <div class="bgBox" style={{ top: '220px', height: '702px' }}>

                    <p
                        className="heading"
                        style={{ position: 'relative', left: '40px', top: '0px' }}>
                        Customer Registration Form
                    </p>

                    <input
                        className="align-middle"
                        placeholder="Email Id"
                        className="txtbox"
                        style={{ left: '135px', top: '60px' }}
                        value={this.state.email}
                        name='email'
                        onChange={this.changeEmailHandler}>
                    </input>

                    <input
                        placeholder="Username"
                        className="txtbox"
                        style={{ left: '130px', top: '150px' }}
                        value={this.state.username}
                        name='username'
                        onChange={this.changeUsernameHandler}>
                    </input>

                    <input
                        placeholder="Address"
                        className="txtbox"
                        style={{ left: '130px', top: '240px' }}
                        value={this.state.address}
                        name='address'
                        onChange={this.changeAddressHandler}>
                    </input>

                    <input
                        placeholder="Phone Number"
                        className="txtbox"
                        style={{ left: '130px', top: '330px' }}
                        value={this.state.phoneNo}
                        name='phoneNo'
                        onChange={this.changePhoneNoHandler}>
                    </input>

                    <input
                        type="password"
                        placeholder="Password"
                        className="txtbox"
                        style={{ left: '130px', top: '420px' }}
                        value={this.state.password}
                        name='password'
                        onChange={this.changePasswordHandler} >
                    </input>

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="txtbox"
                        style={{ left: '130px', top: '510px' }}
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        onChange={this.changeConfirmPasswordHandler} >
                    </input>

                    <button
                        className="btn btn-success"
                        style={{ left: '90px', top: '600px' }}
                        onClick={this.saveCustomer}>Register
                     </button>

                    <button
                        className="btn btn-danger"
                        style={{ left: '300px', top: '600px' }}
                        onClick={this.cancel}>Cancel
                    </button>

                </div>

            </div>
        )
    }
}

export default RegisterComponent
