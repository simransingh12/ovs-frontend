import React, { Component } from 'react'
import FeedbckService from '../services/FeedbckService';
import {FaStar,FaThumbsDown,FaThumbsUp} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

class CustomerViewFeedback extends Component {
    constructor(props){
        super(props)

        this.state = {
            feedbacks: [],
            rating: 0,
            feedByFeedId:[],
            feedByCustId:[],

        }
    }

    componentDidMount(){
        FeedbckService.getFeedbacks()
        .then((res) => {
            this.setState({feedbacks: res.data});
        })
        FeedbckService.getFeedbackRelByCustId(UserProfile.getName())
        .then((res) => {
            this.setState({feedByCustId: res.data});
        })
    }
    toggle=(fedId,e)=>{
        if(e.target.classList.value === "fa fa-thumbs-up"){
            e.target.style.color="red"
            FeedbckService.addLike(fedId,UserProfile.getName())
        }
        else{
            e.target.style.color="blue"
            FeedbckService.addDislike(fedId,UserProfile.getName())
        }
        e.target.classList.toggle("fa-thumbs-down")
        
        window.location.reload(); 
        
    }
   

    render() {
        return (
            <div>
                <Link to="/myProfile"class="feedbackmypro">My Profile</Link> 
                <Link to="/Login"  class="feedbacklogout">Logout</Link>
                <Link to="/vegetable" class="feedbackhome" >Home</Link> 
                <Link to="/giveFeedback"  class="feedbacklogout" style={{right:'550px'}}>Give Feedback</Link> 
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
               <div>
               <h1 class="feedhead" >Feedbacks</h1>
               <div>
                       <table>
                           <tbody class="custfeedbacktable" style={{position:'absolute', top:'300px', left:'300px'}}>
                               {
                                   this.state.feedbacks.length === 0?
                                   <div class="adminfeedbacklist" style={{height:'600px', width:'1000px'}}>
                                       <h3> No Records Found</h3>
                                   </div>:
                               this.state.feedbacks.map(feedback =>
                                <tr key= {feedback.id} >
                                <td  class="feedlist">
                                &nbsp;&nbsp;&nbsp;{feedback.feedDate}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feedback.custId}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feedback.message}
                                    {(feedback.rating === "0") &&
                                    (
                                        <div>
                                            <FaStar size={50} className="star1" id="star1" style={{position:'absolute', left:'500px'}}/>
                                            <FaStar size={50} class="star2" id="star2" style={{position:'absolute', left:'560px'}}/>
                                            <FaStar size={50} class="star3" id="star3" style={{position:'absolute', left:'620px'}}/>
                                            <FaStar size={50} class="star4" id="star4" style={{position:'absolute', left:'680px'}}/>
                                            <FaStar size={50} class="star5" id="star5" style={{position:'absolute', left:'740px'}}/>
                                        </div>)
                                    }
                                    {(feedback.rating === "1") &&
                                    (
                                        <div>
                                            <FaStar size={50} className="star1" id="star1" color="yellow" style={{position:'absolute', left:'500px'}}/>
                                            <FaStar size={50} class="star2" id="star2" style={{position:'absolute', left:'560px'}}/>
                                            <FaStar size={50} class="star3" id="star3" style={{position:'absolute', left:'620px'}}/>
                                            <FaStar size={50} class="star4" id="star4" style={{position:'absolute', left:'680px'}}/>
                                            <FaStar size={50} class="star5" id="star5" style={{position:'absolute', left:'740px'}}/>
                                        </div>)
                                    }
                                    {(feedback.rating === "2") &&
                                    (
                                        <div>
                                            <FaStar size={50} className="star1" id="star1" color="yellow" style={{position:'absolute', left:'500px'}}/>
                                            <FaStar size={50} class="star2" id="star2" color="yellow" style={{position:'absolute', left:'560px'}}/>
                                            <FaStar size={50} class="star3" id="star3" style={{position:'absolute', left:'620px'}}/>
                                            <FaStar size={50} class="star4" id="star4" style={{position:'absolute', left:'680px'}}/>
                                            <FaStar size={50} class="star5" id="star5" style={{position:'absolute', left:'740px'}}/>
                                        </div>)
                                    }
                                    {(feedback.rating === "3") &&
                                    (
                                        <div>
                                            <FaStar size={50} className="star1" id="star1" color="yellow" style={{position:'absolute', left:'500px'}}/>
                                            <FaStar size={50} class="star2" id="star2" color="yellow" style={{position:'absolute', left:'560px'}}/>
                                            <FaStar size={50} class="star3" id="star3" color="yellow" style={{position:'absolute', left:'620px'}}/>
                                            <FaStar size={50} class="star4" id="star4" style={{position:'absolute', left:'680px'}}/>
                                            <FaStar size={50} class="star5" id="star5" style={{position:'absolute', left:'740px'}}/>
                                        </div>)
                                    }
                                    {(feedback.rating === "4") &&
                                    (
                                        <div>
                                            <FaStar size={50} className="star1" id="star1" color="yellow" style={{position:'absolute', left:'500px'}}/>
                                            <FaStar size={50} class="star2" id="star2" color="yellow" style={{position:'absolute', left:'560px'}}/>
                                            <FaStar size={50} class="star3" id="star3" color="yellow" style={{position:'absolute', left:'620px'}}/>
                                            <FaStar size={50} class="star4" id="star4" color="yellow" style={{position:'absolute', left:'680px'}}/>
                                            <FaStar size={50} class="star5" id="star5" style={{position:'absolute', left:'740px'}}/>
                                        </div>)
                                    }
                                    {(feedback.rating === "5") &&
                                    (
                                        <div>
                                            <FaStar size={50} className="star1" id="star1" color="yellow" style={{position:'absolute', left:'500px'}}/>
                                            <FaStar size={50} class="star2" id="star2" color="yellow" style={{position:'absolute', left:'560px'}}/>
                                            <FaStar size={50} class="star3" id="star3" color="yellow" style={{position:'absolute', left:'620px'}}/>
                                            <FaStar size={50} class="star4" id="star4" color="yellow" style={{position:'absolute', left:'680px'}}/>
                                            <FaStar size={50} class="star5" id="star5" color="yellow" style={{position:'absolute', left:'740px'}}/>
                                        </div>)
                                    }
                                        {
                                            this.state.feedByCustId.length===0?<i  id="btntog" class="fa fa-thumbs-up" onClick={(e)=>this.toggle(feedback.fedId,e)} style={{position:'absolute',left:'900px', fontSize:'50px', color: 'blue'}}></i>
                                            :this.state.feedByCustId.filter(f=>f.feed.fedId==feedback.fedId).length === 0
                                            ?<i  id="btntog" class="fa fa-thumbs-up" onClick={(e)=>this.toggle(feedback.fedId,e)} style={{position:'absolute',left:'900px', fontSize:'50px', color: 'blue'}}></i>
                                            :this.state.feedByCustId.filter(f=>f.feed.fedId==feedback.fedId).map(f=>
                                            !f.likes && !f.dislikes?<i  id="btntog" class="fa fa-thumbs-up" onClick={(e)=>this.toggle(feedback.fedId,e)} style={{position:'absolute',left:'900px', fontSize:'50px', color: 'blue'}}></i>
                                            :f.likes?<i  id="btntog" class="fa fa-thumbs-down" onClick={(e)=>this.toggle(feedback.fedId,e)} style={{position:'absolute',left:'900px', fontSize:'50px', color: 'red'}}></i>
                                            :<i  id="btntog" class="fa fa-thumbs-up" onClick={(e)=>this.toggle(feedback.fedId,e)} style={{position:'absolute',left:'900px', fontSize:'50px', color: 'blue'}}></i>
                                        )}
                                    
                                    <div style={{position: 'absolute', left: '960px'}}>likes:{feedback.like}</div>
                                    <div style={{position: 'absolute', left: '1060px'}}>dislikes:{feedback.dislike}</div>                                   


                                    <br/><br/>
                                </td>
                                <td>
                                </td>
                                </tr>
                                )}
                               
                            </tbody>
                       </table>
               </div>
               </div> 
            </div>
        )
    }
}

export default CustomerViewFeedback
