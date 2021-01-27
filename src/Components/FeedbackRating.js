import React, { Component } from 'react'
import FeedbckService from '../services/FeedbckService';
import {FaStar, FaThumbsUp, FaThumbsDown, FaJournalWhills} from 'react-icons/fa'
import { Link } from 'react-router-dom';

class FeedbackRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbacks:[],
            rate: this.props.location.state.rate,
            rating: 0,
            hover:0
        }
        this.changeDate= this.changeDate.bind(this);
    }

    componentDidMount(){
        console.log(this.state.rate)
        FeedbckService.getFeedbackByRating(this.state.rate)
        .then((res) => {
            this.setState({feedbacks: res.data});
        })
    }
    searchByDate=()=>{
        var pattern =new RegExp("((?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])")
        if(this.state.date.length===0){
            alert('Enter Date')
        }
        else if(!pattern.test(this.state.date)){
            alert('Enter Valid Date')
        }
        else{
            this.props.history.push(
                {
                    pathname: '/feedbackDate',
                    search: '?query=abc',
                    state: { date: this.state.date }
                  })
        }
    }
    searchByRating=()=>{
        window.location.reload(); 
        this.props.history.push(
        {
            pathname: '/feedbackRating',
            search: '?query=abc',
            state: { rate: this.state.rating }
          })
    }
    changeDate = (event) =>{
        this.setState({date: event.target.value});
    }

    render() {
        return (
            <div>
                <Link  class="mypro">My Profile</Link> 
                <Link  class="logout">Logout</Link> 
                <h1 class="feedhead" style={{position:'absolute',left: '900px',top: '200px'}}>Feedbacks</h1>
                <div class="viewbg-box">
                    
                    <div style={{position:'absolute',left: '250px',top: '125px'}}>
                        View By Date
                    </div>
                    <input type="text" class="date" id="date" name="date" placeholder="Date(yyyy-mm-dd)" onChange={this.changeDate} style={{position:'absolute',left: '160px',top: '180px'}}></input>
                    <button class="search" style={{left:'230px',top:'270px'}} onClick = {()=>this.searchByDate()} >Search</button>

                    <div style={{position:'absolute',left: '250px',top: '400px'}}>
                        View By Rating
                    </div>
                    <div style={{position: 'absolute', left: '220px', top: '450px'}}>
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
                            <button class="search" onClick={()=> this.searchByRating()} style={{left:'230px',top:'525px'}}>Search</button>

                </div>
                <table>
                           <tbody class="table" style={{position:'absolute', top:'300px', left:'780px'}}>
                               {
                                   this.state.feedbacks.length === 0?
                                   <div class="adminfeedlist" style={{height:'600px', width:'1000px'}}>
                                       <h3> No Records Found</h3>
                                   </div>:
                               this.state.feedbacks.map(feedback =>
                                <tr key= {feedback.id} >
                                <td class="adminfeedlist" >
                                &nbsp;&nbsp;&nbsp;{feedback.feedDate}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feedback.custId}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feedback.message}
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
                                    
                                         <FaThumbsUp size={50} style={{position:'absolute', left:'950px'}}/>
                                         <FaThumbsDown size={50} style={{position:'absolute', left:'1050px'}}/><br/><br/>
                                         <div style={{position: 'absolute', left: '960px'}}>{feedback.like}</div>
                                         
                                         
                                         <div style={{position: 'absolute', left: '1060px'}}>{feedback.dislike}</div> 
                                                                        


                                    <br/><br/>
                                </td>
                                <td>
                                </td>
                                </tr>
                                )}
                               
                            </tbody>
                       </table>  
            </div>
        )
    }
}

export default FeedbackRating
