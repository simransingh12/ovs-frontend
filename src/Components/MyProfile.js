import React, { Component } from 'react'
import profileLogo from '../Images/profileLogo.png'
import CustomerService from '../services/CustomerService'
import '../css/Login.css'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'

class MyProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: [],
            email: UserProfile.getName(),
            username: '',
            address: '',
            phoneNo: '',
            password: '',
            confirmPassword: ''
        }
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        CustomerService.viewCustomer(this.state.email).then((res) => {
            let customer = res.data;
            this.setState({
                email: customer.email,
                username: customer.username,
                address: customer.address,
                phoneNo: customer.phoneNo,
                password: customer.password
            });
        });
    }

    validate = () => {
        let isError = false;

        if (this.state.address.length == 0) {
            isError = true;
            alert("Address cannot be empty!")
        }


        if (this.state.phoneNo.length !== 0) {

            if (!this.state.phoneNo.match(/^[0-9]{10}$/)) {

                isError = true;
                alert("Please enter valid phone no.")
            }

        }
        else {
            isError = true;
            alert("Phone number cannot be empty")
        }

        if (this.state.password.length !== 0) {

            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                isError = true;
                alert("Enter secure and strong password");
            }

        }
        else {
            isError = true;
            alert("Password cannot be empty")
        }

        if (this.state.password !== this.state.confirmPassword) {
            isError = true;
            alert('Confirm password doesnot match!')
        }

        return isError;
    }


    updateCustomer = (e) => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {

            let customer = {
                email: this.state.email, username: this.state.username,
                address: this.state.address, phoneNo: this.state.phoneNo, password: this.state.password
            };
            console.log(JSON.stringify(customer));
            CustomerService.updateCustomer(customer, this.state.email).then(res => {
                alert('Profile Updated Successfully!');
            })
        }
    }

    changeAddressHandler = (event) => {
        console.log(event.target.value)
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

    logout() {
        this.props.history.push(`/login`)
    }

    render() {
        return (
            <div>
                <Link to="/vegetable" class="mypro">HOME</Link>
                <div className="bgBox" style={{ height: '740px', top: '205px', width: '1400px', left: '500px' }}>

                    <p className='heading'><h2>My Profile</h2></p>

                    <div className='heading'>

                        <p style={{ position: 'relative', top: '10px' }}>Address</p>

                        <input
                            placeholder="Address"
                            className="txtbox"
                            style={{ top: '125px' }}
                            value={this.state.address}
                            name='address'
                            onChange={this.changeAddressHandler}>
                        </input>

                        <p style={{ position: 'relative', top: '50px' }}>Phone Number</p>

                        <input
                            placeholder="PhoneNo"
                            className="txtbox"
                            style={{ top: '250px' }}
                            value={this.state.phoneNo}
                            name='phoneNo'
                            onChange={this.changePhoneNoHandler}>
                        </input>

                        <p style={{ position: 'relative', top: '90px' }}>Password</p>

                        <input
                            type="password"
                            placeholder="Password"
                            className="txtbox"
                            style={{ top: '375px' }}
                            value={this.state.password}
                            name='password'
                            onChange={this.changePasswordHandler}>
                        </input>

                        <p style={{ position: 'relative', top: '140px' }}>ConfirmPassword</p>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="txtbox"
                            style={{ top: '510px' }}
                            value={this.state.confirmPassword}
                            name='confirmPassword'
                            onChange={this.changeConfirmPasswordHandler}>
                        </input>

                        <button
                            className="btn btn-success"
                            style={{ position: 'relative', top: '200px', left: '70px' }}
                            onClick={this.updateCustomer}>Save
                        </button>

                    </div>

                </div>

                <div className="profileBox">

                    <img
                        src={profileLogo}
                        style={{ position: 'relative', left: '175px' }}>
                    </img>

                    <br></br>

                    <p className='heading' style={{ position: 'relative', left: '175px' }}>{this.state.username}</p>

                    <p className='heading' style={{ position: 'relative', left: '100px' }}>{this.state.email}</p>

                    <button
                        className="btn btn-info"
                        style={{ position: 'relative', left: '135px', top: '10px' }}
                        onClick={this.logout}>Logout
                    </button>
                 
                </div>

            </div>
        )
    }
}

export default MyProfile
