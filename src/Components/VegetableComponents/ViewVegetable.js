import React, { Component } from 'react'
// import './src/Components/ViewVegetable.css'
import '../../../src/css/ViewVegetable.css'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import myProfile from './../MyProfile'

class ViewVegetable extends Component {
  
    
    render() {
        return (
            <div>
                <div className = "sidebox">
<ProSidebar >
  <Menu >
    <MenuItem >FILTER</MenuItem>
    <SubMenu title="Type">
      <MenuItem>Leafy green<Link to = "/getByVegetableTypeLeafygreen"/></MenuItem>
      <MenuItem>Cruciferous<Link to = "/getByVegetableTypeCruciferous"/></MenuItem>
      <MenuItem>Marrow<Link to = "/getByVegetableTypeMarrow"/></MenuItem>
      <MenuItem>Root<Link to = "/getByVegetableTypeRoot"/></MenuItem>
      <MenuItem>Edible plant steam<Link to = "/getByVegetableTypeEdiblePlantSteam"/></MenuItem>
      <MenuItem>Allium<Link to = "/getByVegetableTypeAllium"/></MenuItem>  
    </SubMenu>
    <SubMenu title="Price">
      <MenuItem>Less than Rs. 20<Link to = "/getByVegetablePriceLessThan20"/></MenuItem>
      <MenuItem>Rs 21 to Rs 50<Link to = "/getByVegetablePriceBetween21to50"/></MenuItem>
      <MenuItem>Rs 51 to Rs 100<Link to ="/getByVegetablePriceBetween51to100"/></MenuItem>
      <MenuItem>More than Rs. 101<Link to ="/getByVegetablePriceGreaterThan100"/></MenuItem>
    </SubMenu>
    <MenuItem>My Profile<Link to="/myProfile"/></MenuItem>
    <MenuItem>Feedback <Link to="/customerViewFeedback"/></MenuItem>
    <MenuItem>View Cart <Link to="/Cart"/></MenuItem>
    <MenuItem>View Orders <Link to="/order"/></MenuItem>
    <MenuItem>Logout <Link to="/login"/></MenuItem>
    
  </Menu>
</ProSidebar>;
                </div>   
            </div>
        )
    }
}
export default ViewVegetable
