import React from 'react'
import veglogo from '../Images/veglogo.png'
import '../App.css'
function Header(){
    return(
        <div>
        
        <div className="logoHeader"></div>
        
        <div className="title">
          
          <h1>
          <div style={{float:'left'}}><img src={veglogo} style={{position:'relative',top:'-20px',left:'-600px'}}></img></div>
          <div style={{float:'left',position:'relative',top:'20px',left:'-570px',color:'white'}}>SMART-VEG</div><br></br>
          <div style={{float:'left',position:'relative',top:'10px',left:'-515px'}}><p style={{fontSize:'20px'}}>Smart Vegetable Market </p></div>
          </h1></div>
        </div>
    )
}

export default Header