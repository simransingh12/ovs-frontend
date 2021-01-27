import React, { Component } from 'react'
import PaymentService from '../services/PaymentService.js'


class viewAllPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // email:this.props.match.params.email,
            payments: []
        }
    }

    // componentDidMount() {
    //     PaymentService.viewMyListOfVegs()
    //         .then((res) => {
    //             this.setState({ payments: res.data });
    //         });
    // }

    componentDidMount() {
        PaymentService.getAllPayments()
            .then((res) => {
                this.setState({ payments: res.data });
            });
            console.log(this.state.pay);
    }


    changeDate = (event) =>{
        this.setState({date: event.target.value});
    }

    searchByDate=()=>{
        this.props.history.push(
        {
            pathname: '/paymentDate',
            search: '?query=abc',
            state: { date: this.state.date }
          })
    }





    // render() {
    //     return (
    //         <div>
    //             <div className="bgOfVeg1">
    //                 <p className="v1">Cabbage</p>
    //                 <p className="q1">1kg = 20 &#8377;</p>
    //                 <p className="c1">20 x 2</p>
    //                 <p className="p1">&#8377; 40</p>
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <div>


                    <div className="row">
                        <div style={{position:'absolute' ,left:'900px',height:'100px ' ,width:'300px', top :'100px'}}>
                        <input type="text" className="searchdate"  id="date1" name="date" placeholder="Date(yyyy-mm-dd)" onChange={this.changeDate} style={{right:'100px',top:'100px'}}></input>
                       <button className="btnpayment" style={{left:'950px',top:'300px'}} onClick = {()=>this.searchByDate()} >Search</button>
                
                
                        </div>
                        <h2 className="text-center">Payment List</h2>
                        <table className="table table-striped table-bordered" >
                            <thead>
                                <tr>
                                    <th>Payment Id</th>
                                    <th>Email</th>
                                    <th>Total Amount</th>
                                    <th>Payment Date</th>
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
        );
    }
}

export default viewAllPayment
