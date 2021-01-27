import React, { Component } from 'react'
import '../css/CustomerOrder.css'
import OrderService from '../services/OrderService.js'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'

class CustomerOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: UserProfile.getName(),
            orders: []
        }
        console.log(this.state.email)
    }

    componentDidMount() {
        OrderService.viewOrderByEmail(this.state.email)
            .then((res) => {
                this.setState({ orders: res.data });
            }).catch(function(error){
                alert("order not found");
            })

        console.log(this.state.orders)
    }

    cancelOrder(orderId){
        OrderService.cancelOrder(orderId).then(res=>{
            alert("Order Cancelled successfully!")
        }).catch(function(error){
            alert("Order can be cancelled only within 10 days")
        })
        window.location.reload(false);
    }


    render() {
        console.log(this.state.payments)
        return (
            <div>
                  <Link style={{color:"black"}} to="/order">Home</Link>
                <div className="row" >
               
                {/* <li><Link to="/login">Logout</Link></li> */}
                
                    <h2 className="text-center" style={{ color: "#f5fefa" }}>List of Orders</h2>
                    <table className="table">
                        <thead style={{ color: "#ffffff" }} >
                            <tr >
                                <th>Email</th>
                                <th>Quantity</th>
                                <th>Vegetable Name</th>
                                <th>Payment Date</th>
                                <th>Vegetable Price</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "#ffbd9e" }} >
                            {

                                this.state.orders.map(
                                    order =>
                                        <tr key={order.orderId}>

                                            <td>{order.email}</td>
                                            <td>{order.Quantity}</td>
                                            <td>{order.vegName}</td>
                                            <td>{order.payDate}</td>
                                            <td>{order.vegPrice}</td>
                                            <td>  <button id="cancelButton"
                                             onClick={()=>this.cancelOrder(order.orderId)}><b>Cancel</b></button></td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>   
            </div>
        );
    }
}

export default CustomerOrder
