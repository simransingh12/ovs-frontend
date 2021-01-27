import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class orderdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date:this.props.location.state.date,
        //    email:this.props.match.params.email, 
           orders: []
        }
        this.changeDate= this.changeDate.bind(this);
    }
 
    componentDidMount() {
        OrderService.viewOrderByDate(this.state.date)
        .then((res) => {
            this.setState({orders:res.data});
            });

            console.log(this.state.orders)
    }

    changeDate = (event) =>{
        this.setState({date: event.target.value});
    }

    searchByDate=()=>{
        window.location.reload()
        this.props.history.push(
        {
            pathname: '/orderDate',
            search: '?query=abc',
            state: { date: this.state.date }
          })
    }

    render() {
        return (
            <div>
                <div>

                {/* <input type="date"  required pattern="\d{4}-\d{2}-\d{2}" placeholder="yyyy-mm-dd" id="t1" name="t1" onChange={this.handleChange}  className="txtbox1"></input> 
                <button className="btn" type="submit" onClick={this.viewOrderByDate}>Search</button> */}

                <input type="text" className="date" id="date" name="date" placeholder="Date(yyyy-mm-dd)" onChange={this.changeDate} style={{left:'1px',top:'200px', position: 'absolute'}}></input>
                <button className="btn" style={{left:'950px',top:'300px'}} onClick = {()=>this.searchByDate()} >Search</button>
                

                    {/* <select className="lable1">
                        <option value="Bydate">View Orders By Date</option>
                     </select> */}

                </div>
                <div>
                    <div className="row">
                        <h2 className="text-center">Order List</h2>
                        <table className="table table-striped table-bordered" >
                            <thead>
                              
                                <tr>
                                   <th>order id</th>
                                    <th>Email </th>
                                    <th>Quantity </th>
                                    <th>vegetable Name     </th>
                                    <th>order date </th>
                                    <th>vegetable Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.orders.map(
                                        order =>
                                            <tr key={order.orderId}>
                                                  <td>{order.orderId}</td> 
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
        )
    }
}

export default orderdate
