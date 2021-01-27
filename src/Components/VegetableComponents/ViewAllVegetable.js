import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VegetableService from '../../services/VegetableService';
import ViewVegetable from '../VegetableComponents/ViewVegetable';
import ViewVegetableById from './ViewVegetableById'
import '../../../src/css/ViewVegetable.css'
//import './src/ViewVegetable.css'

class ViewAllVegetable extends Component {
    constructor(props){
        super(props)

        this.state = {
            vegetable: []
        }
        this.addVegetable = this.addVegetable.bind(this);
        this.editVegetable = this.editVegetable.bind(this);
        this.deleteVegetable = this.deleteVegetable.bind(this);
        this.ViewVegetable = this.ViewVegetable.bind(this);
    }

    componentDidMount(){
        VegetableService.getVegetable()
        .then((res) => {
            this.setState({vegetable: res.data});
        });
    }

    addVegetable(){
        this.props.history.push('/add-vegetable');
      }
      
    editVegetable(vegId){
        this.props.history.push(`/update-vegetable/${vegId}`)
    }

    deleteVegetable(vegId){
        VegetableService.deleteVegetable(vegId).then((res) => {
            this.setState({vegetable: this.state.vegetable.filter( vegetable => vegetable.vegId !== vegId)});
        });
    }

    ViewVegetable(vegId){
        this.props.history.push(`/view-vegetable/${vegId}`);
    }

    render() {
        return (


            <div >
            
            
            <h2 >Vegetable List</h2>
            <button  onClick={this.addVegetable} style={{width: "187px", height: "42px",borderRadius:"30px"}}>Add Vegetable</button> 
            
            <div >
                <table style={{width:"1100px",overflowX:"scroll"}}>
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
                                <tr > <button onClick = {()=>this.editVegetable(vegetable.vegId)}  style={{width: "87px", height: "42px",borderRadius:"30px",marginLeft: "10px"}} >Update</button></tr>
                                <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteVegetable(vegetable.vegId)} style={{width: "87px", height: "42px",borderRadius:"30px",marginLeft: "10px"} }>Delete</button>
                                <tr><button  style = {{marginLeft: "10px"}} onClick = {()=>this.ViewVegetable(vegetable.vegId)} >View</button>
                                </tr>  </tr> 
                                 </table>}
                                 </td> 
                            )
                        }
                    </tr>
                </table>
            
            </div> 
            
        </div>



            // <div >
            //     <div>
            //         <ViewVegetable/>
            //     </div>
            //     <div>
            //     <h2 >Vegetable List</h2>
                
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
            //                             <td> <button onClick = {()=>this.editVegetable(vegetable.vegId)} >Edit</button></td>
            //                             <td>
            //                                 <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteVegetable(vegetable.vegId)} >Delete</button>
            //                             </td>
            //                             <td>
            //                                 <button  style = {{marginLeft: "10px"}} onClick = {()=>this.ViewVegetable(vegetable.vegId)} >View</button>
            //                             </td>
            //                          </tr>  
                                     
            //                     )
            //                 }
            //             </tbody>
            //         </table>
            //     </div>
            //     </div> 
            //     <div>
            //     <div >
            //     <button  onClick={this.addVegetable}>Add Vegetable</button>                                  
            //     </div></div> 
            // </div>
        );
    }
}



export default ViewAllVegetable;