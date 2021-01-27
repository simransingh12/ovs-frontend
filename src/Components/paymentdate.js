import React, { Component } from 'react'
import PaymentService from '../services/PaymentService';
import '../css/payment.css'

class orderdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date:this.props.location.state.date,
           payments: []
        }
        this.changeDate= this.changeDate.bind(this);
    }
 
    componentDidMount() {
        PaymentService.viewPaymentByDate(this.state.date)
        .then((res) => {
            this.setState({payments:res.data});
            });

            console.log(this.state.payments)
    }

    changeDate = (event) =>{
        this.setState({date: event.target.value});
    }

    searchByDate=()=>{
        window.location.reload()
        this.props.history.push(
        {
            pathname: '/paymentDate',
            search: '?query=abc',
            state: { date: this.state.date }
          })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div style={{position:'absolute' ,left:'900px',height:'100px ' ,width:'300px', top :'100px'}}>
                        <input type="text" className="searchdate" id="date1" name="date" placeholder="Date(yyyy-mm-dd)" onChange={this.changeDate} style={{right:'100px',top:'100px'}}></input>
                       <button className="btnpayment" style={{left:'950px',top:'300px'}} onClick = {()=>this.searchByDate()} >Search</button>
                
                
                        </div>
                        <h2 className="text-center">Payment List</h2>
                        <table className="table table-striped table-bordered" >
                            <thead>
                              
                                <tr>
                                    <th>Email</th>                        
                                    <th>Quantity</th>
                                    <th>Vegetbale Name</th>
                                    <th>Payemnt Date</th>
                                    <th>Vegetable Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.payments.map(
                                        payment =>
                                        <tr key={payment.paymentId}>
                                        <td>{payment.paymentId}</td>
                                        <td>{payment.email}</td>
                                        <td>{payment.totalAmount}</td>
                                        <td>{payment.payDate}</td>
                                    </tr>
                                    )
                                }
                            </tbody> 
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default orderdate
