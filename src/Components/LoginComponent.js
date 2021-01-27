import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../services/CustomerService'
import UserProfile from './UserProfile'
export class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            selectValue: 'Customer'
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.custLogin = this.custLogin.bind(this);
        this.adminLogin = this.adminLogin.bind(this);
        this.login = this.login.bind(this);

    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    handleDropdownChange = (e) => {
        this.setState({ selectValue: e.target.value });
    }
    
    custLogin = () => {

        CustomerService.checkCustomer(this.state.email, this.state.password).then(res => {

            console.error();
            UserProfile.setName(this.state.email)
            this.props.history.push('/vegetable')

        }).catch(function (error) {
            alert('Invalid email or password!')
        });
    }
    adminLogin = () => {

        CustomerService.checkAdmin(this.state.email, this.state.password).then(res => {

            this.props.history.push({
                pathname: '/adminMenu',
                search: '?query=abc',
                state: { email: this.state.email }
            });
        })
    }

    login = () => {
        console.log(this.state.selectValue)

        if (this.state.selectValue === 'Customer') {
            this.custLogin();
        }

        else if (this.state.selectValue === 'Admin') {
            this.adminLogin();
        }
    }
    render() {
        return (
            <div>
                <div className="bgBox">

                    <p
                        className="heading"
                        style={{ position: 'relative', left: '238px', top: '10px' }}>
                        Login
                    </p>

                    <select
                        name="role"
                        id="role"
                        className="txtbox"
                        style={{ left: '135px', top: '100px' }}
                        onChange={this.handleDropdownChange} >
                        <option value='Customer'>Customer</option>
                        <option value='Admin'>Admin</option>
                    </select>

                    <input
                        placeholder="email"
                        className="txtbox"
                        style={{ left: '130px', top: '200px' }}
                        value={this.state.email}
                        name='email'
                        onChange={this.changeEmailHandler}>
                    </input>

                    <input
                        type="password"
                        placeholder="password"
                        className="txtbox"
                        style={{ left: '130px', top: '300px' }}
                        value={this.state.password}
                        name='password'
                        onChange={this.changePasswordHandler} >
                    </input>

                    <Link
                        to="/forgot"
                        style={{ color: 'orange', position: 'absolute', left: '180px', top: '375px' }}>
                        <b>Forgot Password?</b>
                    </Link>

                    <button
                        className="btn btn-success"
                        style={{ left: '190px', top: '430px' }}
                        onClick={this.login}>Login
                    </button>

                    <p
                        className="heading"
                        style={{ position: 'relative', left: '130px', top: '410px', fontSize: '30px' }}>
                        Don't have an account?
                    </p>

                    <div>
                        <Link
                            to="/register"
                            style={{ color: 'orange', position: 'relative', left: '230px', top: '370px', fontSize: '30px' }}>
                            <b>Register</b>
                        </Link>
                    </div>

                    <Link
                        to="/"
                        className="heading"
                        style={{ position: 'absolute', fontSize: '24px', lineHeight: '44px', left: '1100px', top: '-120px' }}>
                        HOME
                    </Link>

                </div>

            </div>
        )
    }
}

export default LoginComponent
