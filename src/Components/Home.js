import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../StyleFolder/Home.css"

class Home extends Component{
    render(){
        return(
            <div>
                <div className="body"></div>
                <div className="header">
                    <div className="logo"></div>
                    <div className="smartVeg" style={{color:'white'}} >VEGZILLA</div><br></br>
                    <div className="smartVegMarket">Smart Vegetable Market </div>
                </div>
               
            </div>
        )
    }
}

export default Home;