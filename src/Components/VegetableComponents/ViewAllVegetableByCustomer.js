import React, { Component } from 'react'
import CartService from '../../services/CartService';
import VegetableService from '../../services/VegetableService';
import ViewVegetable from '../VegetableComponents/ViewVegetable';
import '../../../src/css/ViewVegetable.css'

class ViewAllVegetableByCustomer extends Component {
    constructor(props){
        super(props)

        this.state = {
            vegetable: []
        }
        this.addToCart = this.addToCart.bind(this);
        
    }

    componentDidMount(){
        VegetableService.getVegetable()
        .then((res) => {
            this.setState({vegetable: res.data});
        });
    }

    addToCart(vegId){
        CartService.addToCart(vegId).then((res) => {
            this.props.history.push('/viewvegetableByCustomer');
        });
      }
      
    render() {
        return (
            <>
                <div>
                    <ViewVegetable/>
                </div>
                <h2 className="heading">All Vegetable List</h2>
                
                <div className="rightBox" >
                    <table style={{width:"100px",overflowX:"scroll"}}>
                        <tr >
                            {
                                this.state.vegetable.map(
                                    vegetable => 
                                    <td >{
                                        <table className="Column"  >
                                    <tr key= {vegetable.vegId} className="Box" >
                                    <tr ><div className="greendot"/></tr>
                                    {/* <tr>{vegetable.vegId}</tr> */}
                                    <tr>{vegetable.vegName}</tr>
                                    <tr>Rs. {vegetable.vegPrice}</tr>
                                    <tr>{vegetable.vegType}</tr>
                                    <tr> <button onClick = {()=>this.addToCart(vegetable.vegId)} style={{borderRadius:"30px"}}>Add To Cart</button></tr>  
                                     </tr> 
                                     </table>}
                                     </td> 
                                )
                            }
                        </tr>
                    </table>
                
                </div> 
                
                
                </>
        );
        
    }
}

export default ViewAllVegetableByCustomer
