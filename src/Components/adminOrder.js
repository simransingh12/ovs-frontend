import React, { Component } from 'react'
import '../css/CustomerOrder.css'
import OrderService from '../services/OrderService.js'



class adminOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date:'',
        //    email:this.props.match.params.email, 
           orders: []
        }
        this.changeDate= this.changeDate.bind(this);
    }
 
    componentDidMount() {
        OrderService.getAllOrders(this.state.date)
        .then((res) => {
            this.setState({orders:res.data});
            });

            console.log(this.state.orders)
    }

    viewOrderByEmail(email){
        OrderService.viewOrderByEmail(this.state.email)
        .then((res) => {
            this.setState({orders:res.data});
        });
    }

    viewOrderByDate(){
        OrderService.viewOrderByDate()
        .then((res) => {
            this.setState({orders: res.data});
        });
        
    }

    // viewOrderByDate(){
    //     OrderService.viewOrderByDate("2020-09-08")
    //     .then();
    //     console.log(document.getElementById("t1").value)
    // }

    // handleChange(e) {
    //    document.getElementById("t1").innerText = e.target.value;
    //    console.log(e.target.value)
    // }

    searchByDate=()=>{
        this.props.history.push(
        {
            pathname: '/orderDate',
            search: '?query=abc',
            state: { date: this.state.date }
          })
    }
  
    changeDate = (event) =>{
        console.log(event.target.value)
        this.setState({date: event.target.value});
    }

    render() {
        console.log(this.state.orders)
        return (          
            <div>
                <div>

                <input type="text" className="date" id="date" name="date" placeholder="Date(yyyy-mm-dd)" onChange={this.changeDate} style={{position:'absolute',left: '100px',top: '300px'}}></input>
                <button className="btn" style={{left:'900px',top:'350px'}} onClick = {()=>this.searchByDate()} >Search</button>
 
                </div>
                <div>
                    <div className="row">
                        <h2 className="text-center">Order List</h2>
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
                                    this.state.orders.map(
                                        order =>
                                            <tr key={order.orderId}>
                                                <td>{order.email}</td>
                                                <td>{order.Quantity}</td>
                                                <td>{order.vegName}</td> 
                                                <td>{order.payDate}</td> 
                                                <td>{order.vegPrice}</td>
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

export default adminOrder
