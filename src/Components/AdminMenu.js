
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import OrderService from '../services/OrderService.js'
import  { Button }  from 'react-bootstrap'
import '../css/AdminMenu.css'

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
                    this.props.history.push('/vegetables')
                    }




    render() {
        return (
            <div>
              <div className="adminviewbg">
                  <label className="adminmenu">ADMIN MENU</label>
                    <Link to="/login" className="heading" style={{position: 'absolute',fontSize: '24px',lineHeight: '44px',left: '1000px',top: '-70px'}}>LOGOUT</Link>
                    <Button className="ViewOrders" type="submit" onClick={this.viewAllOrders} color="rgba(43, 43, 41, 100)" style={{position:'absolute',left: '120px',top: '350px',width: '250px',  height: '60px' }}>View Orders</Button>  
                    <Button className="ViewPayments" type="submit" onClick = {this.viewAllPayments} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '120px',top: '170px',width: '250px',  height: '60px' }}>View Payments</Button>
                    <Button className="ViewFeedbacks" type="submit" onClick = {this.viewAllFeedbacks} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '120px',top: '260px',width: '250px',  height: '60px' }}>View Feedback</Button>
                    <Button className="ViewVegetables" type="submit" onClick = {this.viewAllVegetables} color="rgba(43, 43, 41, 0.83)" style={{position:'absolute',left: '120px',top: '80px',width: '250px',  height: '60px' }}>View Vegetables</Button>

                </div>
            </div>
        )
    }
}

export default AdminMenu