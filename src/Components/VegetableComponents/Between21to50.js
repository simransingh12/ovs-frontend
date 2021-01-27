import React, { Component } from 'react'
import ViewVegetable from '../VegetableComponents/ViewVegetable';
import VegetableService from '../../services/VegetableService';

class Between21to50 extends Component {
    constructor(props){
        super(props)

        this.state = {
            vegetable: []
        }
    }

    componentDidMount(){
        VegetableService.getVegetableByPriceBetween21to50()
        .then((res) => {
            this.setState({vegetable: res.data});
        });
    }
    render() {
        return (


            <div classname="cards__container" >
            <div>
                <ViewVegetable/>
            </div>
            
            <h2 >Vegetable List Greater than 20</h2>
            
            <div className="rightBox">
                <table >
                    <tr >
                        {
                            this.state.vegetable.map(
                                vegetable => 
                                <td >{
                                    <table className="Column" >
                                <tr key= {vegetable.vegId} className="Box" >
                                <tr ><div className="greendot"/></tr>
                                {/* <tr>{vegetable.vegId}</tr> */}
                                <tr>{vegetable.vegName}</tr>
                                <tr>Rs. {vegetable.vegPrice}</tr>
                                <tr>{vegetable.vegType}</tr>
                                <tr> <button onClick = {()=>this.addToCart(vegetable.vegId)} >Add To Cart</button></tr>  
                                 </tr> 
                                 </table>}
                                 </td> 
                            )
                        }
                    </tr>
                </table>
            
            </div> 
            
        </div>



            // <div>
            // <div>
            //     <ViewVegetable/>
            // </div>
            // <div>
            //     <h2 className="text-center">Vegetable List Greater than 20</h2>
                
            //     <div >
            //         <table className="Box">
            //             <thead>
            //                 <tr>                                
            //                     <th>Vegetable Id</th>
            //                     <th>Vegetable Name</th>
            //                     <th>Vegetable Price</th>
            //                     <th>Vegetable Type</th>
            //                 </tr>
            //             </thead>

            //             <tbody>
            //                 {
            //                     this.state.vegetable.map(
            //                         vegetable => 
            //                         <tr key= {vegetable.vegId} className="Box">
            //                             <td>{vegetable.vegId}</td>
            //                             <td>{vegetable.vegName}</td>
            //                             <td>{vegetable.vegPrice}</td>
            //                             <td>{vegetable.vegType}</td>
            //                          </tr>  
            //                     )
            //                 }
            //             </tbody>
            //         </table>
            //     </div>
            //     </div>  
            // </div>
        )
    }
}

export default Between21to50