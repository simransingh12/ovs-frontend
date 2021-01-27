import React, { Component } from 'react'
import VegetableService from '../../services/VegetableService';
import Pic from './../../Images/Create.jpg'

class UpdateVegetableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                vegId: this.props.match.params.id,
                vegName:'',
                vegPrice: '',
                vegType: ''
        }
        this.changeVegetableNameHandler= this.changeVegetableNameHandler.bind(this);
        this.changePriceHandler= this.changePriceHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.updateVegetable = this.updateVegetable.bind(this);
    }   


    componentDidMount(){
        VegetableService.getVegetableById(this.state.vegId).then((res)=>{
            let vegetable =  res.data;
            this.setState({
                vegId: vegetable.vegId,
                vegName: vegetable.vegName,
                vegPrice: vegetable.vegPrice,
                vegType: vegetable.vegType
            });
        });
    }

    updateVegetable = (e)=>{
        e.preventDefault();
        let vegetable ={ vegId: this.state.vegId, vegName: this.state.vegName, vegPrice: this.state.vegPrice,
            vegType: this.state.vegType
        };
        console.log(JSON.stringify(vegetable));
       VegetableService.updateVegetable(vegetable,this.state.vegId).then((res) =>{
            this.props.history.push('/viewVegetable');
       });
    }  
    
    cancel(){
        this.props.history.push('/viewVegetable');
    }

    changeVegetableNameHandler = (event) =>{
        this.setState({vegName: event.target.value});
    }

    changePriceHandler = (event) =>{
        this.setState({vegPrice: event.target.value});
    }

    changeTypeHandler = (event) =>{
        this.setState({vegType: event.target.value});
    }

    render() {
        return (
            <table >
                <tr>
                <td>
                            <div className="rgBox">
                                <img src={Pic} style={{width: "800px",height: "518px",borderRadius: "30px"}}></img>
                            </div>
                        </td>
                    <td>
                        <div className="VbgBox">
                            <h3 className="vheading">Update Vegetable</h3>
                            <div >
                                <form>
                                    <div > 
                                        <input placeholder="Vegetable Name" 
                                        className="Vtxtbox" style={{top:"120px"}}
                                            name="vegName"
                                            value = {this.state.vegName} 
                                            onChange = {this.changeVegetableNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <input placeholder="Price" name="vegprice"
                                        className="Vtxtbox" style={{top:"220px"}} 
                                             value = {this.state.vegPrice} 
                                            onChange = {this.changePriceHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <input placeholder="Type" name="vegType"
                                        className="Vtxtbox" style={{top:"320px"}}
                                             value = {this.state.vegType} 
                                            onChange = {this.changeTypeHandler}/>
                                    </div>
                                    <button className="VButton" style={{top:"420px",marginLeft:"25px"}} onClick = {this.updateVegetable}>Update</button>
                                    <button  className="VButton" style={{top:"420px", left:"250px",backgroundColor:"red"}} onClick = {this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                        </td>
                        
                        </tr>
                        </table>
                   
        );
    }
}

export default UpdateVegetableComponent
