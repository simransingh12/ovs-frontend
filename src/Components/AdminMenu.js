
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import OrderService from '../services/OrderService.js'


class AdminMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            feedbacks: [],
            payments:[],
            vegetables:[]
        }
        this.viewAllOrders = this.viewAllOrders.bind(this)   
        this.viewAllPayments = this.viewAllPayments.bind(this)
        this.viewAllFeedbacks = this.viewAllFeedbacks.bind(this)
        this.viewAllVegetables = this.viewAllVegetables.bind(this)
    }


    // componentDidMount(){
    //     OrderService.getAllOrders()
    //     .then((res) => {
    //         this.setState({orders: res.data});
    //     });
     
    // viewByOrders=()=>{
    //     this.props.history.push(
    //     {
    //         pathname: '/getAllorders',
    //         search: '?query=abc',
    //         state: { date: this.state.date }
    //       })
    // }

    viewAllOrders(){
    this.props.history.push('/orders')
    }

    viewAllPayments(){
        this.props.history.push('/payments')
        }

    viewAllFeedbacks(){
            this.props.history.push('/adminViewFeedback')
            }

    viewAllVegetables(){
                this.props.history.push('/viewVegetable')
                }



    render() {
        return (
            <div>
              <div className="row">
                    <Link to="/login" className="heading" style={{position: 'absolute',fontSize: '24px',lineHeight: '44px',left: '1600px',top: '-40px'}}>LOGOUT</Link>
                    <button className="ViewOrders" type="submit" onClick={this.viewAllOrders} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '500px',top: '200px',width: '250px',  height: '60px' }}>View Orders</button>  
                    <button className="ViewPayments" type="submit" onClick = {this.viewAllPayments} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '500px',top: '300px',width: '250px',  height: '60px' }}>View Payments</button>
                    <button className="ViewFeedbacks" type="submit" onClick = {this.viewAllFeedbacks} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '500px',top: '400px',width: '250px',  height: '60px' }}>View Feedback</button>
                    <button className="ViewVegetables" type="submit" onClick = {this.viewAllVegetables} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '500px',top: '500px',width: '250px',  height: '60px' }}>View Vegetables</button>

                </div>
            </div>
        )
    }
}

export default AdminMenu