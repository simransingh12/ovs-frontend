import React, { Component } from 'react'
import '../css/CustomerPayment.css'
import PaymentService from '../services/PaymentService.js'
import UserProfile from './UserProfile'


class CustomerPayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: UserProfile.getName(),
            payments: []
        }
        console.log(this.state.email)
    }

    componentDidMount() {
        PaymentService.viewMyListOfVegs(this.state.email)
            .then((res) => {
                this.setState({ payments: res.data });
            })

    }

    makePayment(email) {
        PaymentService.makePayment(email)
            .then(alert('Payment successful!'));
            this.props.history.push('/giveFeedback')
        window.location.reload(true);
    }



    ShowHideDiv() {
        var payOptions = document.getElementById("payOptions");
        var div1 = document.getElementById("div1");
        div1.style.display = payOptions.value == "COD" ? "none" : "block";
    }

    handleChange(e) {
        document.getElementById("t1").innerText = e.target.value;
        console.log(e.target.value)
    }

    render() {
        console.log(this.state.payments)
        return ( 
                <div>
                    <div className="row2" >
                        <h2 className="text-center" style={{ color: "#f5fefa" }}>List of Vegetables</h2>
                        <table className="table1">
                            <thead style={{ color: "#ffffff" }} >
                                <tr >
                                    <th >Name</th>
                                    <th>Quantity</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: "#ffbd9e" }} >
                                {

                                    this.state.payments.map(
                                        payment =>
                                            <tr >

                                                <td >{payment.VegName}</td>
                                                <td >{payment.Quantity}</td>
                                                <td >{payment.email}</td>
                                                <td >{payment.vegPrice}</td>

                                            </tr>

                                    )
                                }
                            </tbody>

                        </table>
                    </div>


                    <div className="row1">
                        <label for="payOptions" style={{ color: "#f5fefa" }}>Choose payment mode:  </label>
                        <select name="payOptions" id="payOptions" onChange={this.ShowHideDiv}>
                            <option value="debit">Debit Card</option>
                            <option value="credit">Credit Card</option>
                            <option value="COD">Cash on delivery</option>

                        </select>
                        <div id='div1' style={{ display: 'none', color: "#f5fefa" }}> Enter Card Number: <input type="text" id="t1" name="t1" placeholder="Enter Card Number" onChange={this.handleChange} ></input> </div>
                        {/* <label id="l1" for='div2'style={{ color: "#f5fefa", left:'80px' }} >UPI:  </label>  */}
                        <div id='div2'></div>
                        <div id='div3'style={{marginTop:"50px"}}> 
                        <button id='payNow'
                            onClick={() => this.makePayment(this.state.email)}><b>PAY NOW</b>
                        </button></div>
                    </div>

                </div>
        );
    }
}

export default CustomerPayment
