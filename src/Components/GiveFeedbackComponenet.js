import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import f1 from '../css/feedback.css'
import FeedbackService from '../services/FeedbckService'
import {FaStar} from 'react-icons/fa'
import UserProfile from './UserProfile'

class GiveFeedbackComponenet extends Component {
    constructor(props) {
        super(props);
        this.state = {
                rating: 0,
                message:'',
                hover:0,
                isValid:true
        }
        this.changeFeedbackMessage= this.changeFeedbackMessage.bind(this);
        
        
    } 
    cancel = () =>{
        this.props.history.push('/vegetable');
    } 

    saveFeedback = (e)=>{
        console.log(this.state.email)
        console.log(this.state.message.length)
        if(this.state.message.length === 0){
            alert('Enter message')
        }
        else{
            let feedback ={ message: this.state.message,
                custId: UserProfile.getName(), 
                rating: this.state.rating
                
            };
            console.log(JSON.stringify(feedback));
            FeedbackService.createFeedback(feedback).then(res =>{
                this.props.history.push('/customerViewFeedback');
            })
        }
        
    }
    
    changeFeedbackMessage = (event) =>{
        this.setState({message: event.target.value});
    }

    

    render() {
        return (
            <div>
                <link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"></link>
                <div>
                <Link to="myProfile" class="feedbackmypro">My Profile</Link> 
                <Link to="/Login"  class="feedbacklogout">Logout</Link>
                <Link to="/vegetable" class="feedbackhome" >Home</Link>           
                <div className="feedbackbg-box">
                    <div className="feedbacktext">
                        Please take a moment to give a feedback..<br/><br/>
                        <div style={{position: 'absolute', left: '150px'}}>
                            {
                                [...Array(5)].map((star, i) => {
                                    const ratingValue=i+1;
                                    return (
                                        <label>
                                            <input type="radio" name="rating" value="ratingValue" 
                                            onClick={() => this.setState({ rating: ratingValue})}
                                            />
                                            <FaStar size={50} class="star" 
                                            onMouseEnter={() => this.setState({ hover: ratingValue})}
                                            onMouseLeave={() => this.setState({ hover: null})}
                                            color={ratingValue <= (this.state.hover || this.state.rating) ? "#ffc107": "#e4e5e9"}/>
                                        </label>
                                )
                                })}
                            
                            </div>
                        <textarea class="message" id="message" name="message" placeholder="Message"
                         value={this.state.message} onChange={this.changeFeedbackMessage}></textarea>
                        <button name="Submit" class="feedbacksubmit" onClick={this.saveFeedback}style={{left: '60px',top: '450px'}}> Submit</button>
                        <button name="Submit" class="feedbacksubmit" onClick={this.cancel} style={{position:'absolute',left:'300px',top: '450px'}}> Cancel</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default GiveFeedbackComponenet
