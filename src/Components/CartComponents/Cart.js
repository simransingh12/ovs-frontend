import React, { Component } from 'react'
import '../../css/Cart.css'
import CartService from '../../services/CartService.js'
import UserProfile from '../UserProfile'
import {Link} from 'react-router-dom'
class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:UserProfile.getName(),
            cart: []
        }
        console.log(this.state.email);
        this.toPaymentPage=this.toPaymentPage.bind(this)
    }

    componentDidMount(){
        CartService.getCartByEmail(this.state.email)
        .then((res) => {
            this.setState({cart: res.data});
        });
        
    }
    changeQty(email,vegName,cartId){
        CartService.updateQtyOfVeg(email,vegName,document.getElementById(cartId).value).then();
        console.log(email,document.getElementById(cartId).value);
                
        // document.getElementById(cartId).innerHTML=<option>{document.getElementById(cartId).value}</option>
    }
    removeCart(email,vegName){
        CartService.deleteVegFromCart(email,vegName)
        .then((res)=>{
            this.setState({cart:this.state.cart.filter(cart=>cart.email!==email && cart.vegName!==vegName)});
        });
        window.location.reload(false);
        console.log("Delete");
    }
    toPaymentPage(){
        this.props.history.push('/viewMyListOfVegs')
    }
    render(){
        console.log(this.state.cart);
        return(
            <div className="row">
                 <Link to="/vegetable" >HOME</Link> 
                 <Link to="/login">LOGOUT</Link> 
            <table>
            <tr>
            {                
                this.state.cart.map(
                    cart=>
                <td>
                {
                    <table style={{width:'290px',height: '210px',backgroundColor:'white',fontSize:'15px',fontFamily:'Arial, Helvetica, sans-serif;'}}>
                        {/* <tr >{cart.email}</tr> */}
                        <tr style={{width:'280px',height: '210px'}}><div className="VegImage"></div></tr>
                        <tr style={{textTransform:'uppercase',fontWeight:'bold',color:'#e76e1d',fontSize:'20px'}}>{cart.VegName}</tr>
                        
                        <tr>Quantity: <select id={cart.CartId} 
                        onChange={()=>this.changeQty(cart.email,cart.VegName,cart.CartId)}>
                            <option value={cart.Quantity} selected style={{display:'none'}}>{cart.Quantity}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            </select></tr>
                        <tr>Price: &#8377;{cart.vegPrice}/kg</tr>
                        <tr>
                             <button style={{fontFamily:" Arial, Helvetica, sans-serif;",fontSize:"15px",height:"25px",fontWeight:"bold",color:"white",backgroundColor:"orange",border:"0px"}} onClick={()=>this.removeCart(cart.email,cart.VegName)}>REMOVE</button>
                        </tr>
                    </table>
                }
                </td>
                
            )
        }</tr>
    </table>
<div className="divButton"><button className="Buy" onClick={this.toPaymentPage}> Proceed To Buy</button></div>
</div>
        )
    }

}

export default Cart;