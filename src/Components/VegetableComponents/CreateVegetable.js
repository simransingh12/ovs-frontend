import React, { Component } from 'react'
import VegetableService from '../../services/VegetableService';
import Pic from './../../Images/Create.jpg'


class CreateVegetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
                vegId:'',
                vegName:'',
                vegPrice: '',
                vegType: ''
        }
        this.changeVegetableNameHandler= this.changeVegetableNameHandler.bind(this);
        this.changePriceHandler= this.changePriceHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.saveVegetable = this.saveVegetable.bind(this);
    }    
    
    validate = () => {
        let isError = false;
        
        if(this.state.vegName.length !== 0){
            if(!this.state.vegName.match(/^[a-zA-Z\\s]*$/)){
                isError = true;
                alert("Please enter valid vegetable name!")
            }
        }
        else{
            isError = true;
            alert("Vegeetable name cannot be empty!")
        }
        

        if(this.state.vegPrice.length !== 0){
            if(!this.state.vegPrice.match(/^[0-9]*$/)){
                isError = true;
                alert("Please enter valid(Numeric) vegetable price!")
            }
        }
        else{
            isError = true;
            alert("Vegeetable price cannot be empty!")
        }

        if(!this.state.vegType.match(/^[a-zA-Z\\s]*$/)){
            isError = true;
            alert("Please enter valid vegetable name!")
        }
        return isError;
    }


    saveVegetable = (e)=>{
        e.preventDefault();
        const err = this.validate();
        if(!err){
        let vegetable ={ vegId: null, vegName: this.state.vegName, vegPrice: this.state.vegPrice,
            vegType: this.state.vegType
        };
        console.log(JSON.stringify(vegetable));
        VegetableService.createVegetable(vegetable).then(res =>{
            this.props.history.push('/viewVegetable');
        }).catch(function(error){
            alert("Given vegetable already exist")
        });
    }
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
            <table>
                <tr>
                <td>
                            <div className="rgBox">
                                <img src={Pic} style={{width: "800px",height: "518px",borderRadius: "30px"}}></img>
                            </div>
                        </td>
                    <td>
                    
                        <div className="VbgBox">
                            <h3 className="vheading">Add Vegetable</h3>
                            <div >
                                
                                <form>
                                    <div  > 
                                        <input placeholder="Vegetable Name" name="vegName"
                                            className="Vtxtbox" style={{top:"120px"}} value = {this.state.vegName} 
                                            onChange = {this.changeVegetableNameHandler}/>
                                    </div>
                                    <div > 
                                        <input placeholder="Vegetable Price" name="vegPrice"
                                            className="Vtxtbox" style={{top:"220px"}} value = {this.state.vegPrice} 
                                            onChange = {this.changePriceHandler}/>
                                    </div>
                                    <div > 
                                        <input placeholder="Vegetable Type" name="vegType"
                                            className="Vtxtbox" style={{top:"320px"}} value = {this.state.vegType} 
                                            onChange = {this.changeTypeHandler}/>
                                    </div>
                                    <button className="VButton" style={{top:"420px",marginLeft:"25px"}} onClick = {this.saveVegetable}>Save</button>
                                    <button  className="VButton" style={{top:"420px", left:"250px",backgroundColor:"red"}} onClick = {this.cancel.bind(this)} >Cancel</button>
                                </form>
                                
                            </div>
                        </div>
                        </td>
                        
                        </tr>
                        </table>
                    
        )
    }
}

export default CreateVegetable
