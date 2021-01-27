import React, { Component } from 'react'
import VegetableService from '../../services/VegetableService';

class ViewVegetableById extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vegId: this.props.match.params.id,
            vegetable: {}
        }
    }

    componentDidMount(){
        VegetableService.getVegetableById(this.state.vegId).then( res => {
            this.setState({vegetable: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className="bgBox">
                    <h3 className="heading">View Vegetable Details</h3>
                    <div >
                        <div >
                            <label className="heading">Vegetable Name: {this.state.vegetable.vegName}</label>
                        </div>
                        <div >
                            <label className="heading">Vegetable Price: {this.state.vegetable.vegPrice}</label>
                        </div>
                        <div >
                            <label className="heading">Vegetable Type: {this.state.vegetable.vegType}</label>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default ViewVegetableById
