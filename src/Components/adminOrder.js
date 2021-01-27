import React, { Component } from 'react'
import '../css/AdminMenu.css'
import OrderService from '../services/OrderService.js'
import { Link } from 'react-router-dom';


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


    viewOrderByDate(){
        OrderService.viewOrderByDate()
        .then((res) => {
            this.setState({orders: res.data});
        });
        
    }


    // handleChange(e) {
    //    document.getElementById("t1").innerText = e.target.value;
    //    console.log(e.target.value)
    // }

    searchByDate=()=>{
        var pattern =new RegExp("((?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])")
        if(this.state.date.length===0){
            alert('Enter Date')
        }
        else if(!pattern.test(this.state.date)){
            alert('Enter Valid Date')
        }
        else{
        // window.location.reload()
        this.props.history.push(
        {
            pathname: '/orderDate',
            search: '?query=abc',
            state: { date: this.state.date }
          })
    }
}
  
    changeDate = (event) =>{
        console.log(event.target.value)
        this.setState({date: event.target.value});
    }

    render() {
        console.log(this.state.orders)
        return (          
            <div>
                <div className="adminpaymentbg">
                    <Link to="/login" className="heading" style={{position: 'absolute',fontSize: '24px',lineHeight: '44px',left: '1350px',top: '-90px'}}>LOGOUT</Link>
                    <Link to="/Home" className="heading" style={{position: 'absolute',fontSize: '24px',lineHeight: '44px',left: '1220px',top: '-90px'}}>HOME</Link>
                        <div style={{position:'absolute' ,left:'900px',height:'100px ' ,width:'300px', top :'100px'}}>
                        <h3 style={{position:'absolute',left: '10px',top: '-40px'  }}>Enter Date</h3>

                        <input type="text" className="date" id="date" name="date" placeholder="Date(yyyy-mm-dd)" onChange={this.changeDate} style={{right:'0.1000px',top:'-1px', position: 'absolute'}}></input>
                <button className="btndate" style={{left:'-0.10px',top:'80px'}} onClick = {()=>this.searchByDate()} >Search</button>
                </div></div>
                <div>
                    <div className="adminpaymentbg">
                        <h2 className="text-center">Order List</h2>
                        <table className="tablepayment" >
                            <thead >  
                                <tr>
                                    <th>Email</th>                        
                                    <th>Quantity</th>
                                    <th>Vegetable Name</th>
                                    <th>Paymentt Date</th>
                                    <th>Vegetable Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.orders.map(
                                        order =>
                                            <tr key={order.orderId}>
                                               <td >{order.email}</td>
                                               <td >{order.Quantity}</td>
                                               <td >{order.vegName}</td> 
                                               <td >{order.payDate}</td> 
                                               <td >{order.vegPrice}</td>
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
