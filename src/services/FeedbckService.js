import axios from 'axios';

const FEEDBACK_API_BASE_URL = "http://localhost:8082/Feedback";

class FeedbackService {
    getFeedbacks(){
        return axios.get(FEEDBACK_API_BASE_URL+'/viewAllFeedbacks');
    }

    createFeedback(feedback){
        return axios.post(FEEDBACK_API_BASE_URL+'/addFeedback',feedback);
    }

    getFeedbackByDate(feedDate){
        return axios.get(FEEDBACK_API_BASE_URL+'/getFeedbackByDate/'+feedDate)
    }

    getFeedbackByCustId(CustId){
        return axios.get(FEEDBACK_API_BASE_URL+'/viewByCustId/'+CustId);
    }

    getFeedbackByRating(rating){
        return axios.get(FEEDBACK_API_BASE_URL+'/viewByRating/'+rating);
    }

    addLike(feedId,custId){
        return axios.put(FEEDBACK_API_BASE_URL+'/addLike/'+feedId+'/'+custId);
    }

    addDislike(feedId,custId){
        return axios.put(FEEDBACK_API_BASE_URL+'/addDislike/'+feedId+'/'+custId);
    }

    removeLike(feedId,custId){
        return axios.put(FEEDBACK_API_BASE_URL+'/removeLike/'+feedId+'/'+custId);
    }

    removeDislike(feedId,custId){
        return axios.put(FEEDBACK_API_BASE_URL+'/removeDisLike/'+feedId+'/'+custId);
    }

    getLikeAndDislike(feedId){
        return axios.get(FEEDBACK_API_BASE_URL+'/getLikeAndDislike/'+feedId);
    }

    getFeedbackRelByCustId(custId){
        return axios.get(FEEDBACK_API_BASE_URL+'/getFeedbackRelationByCustId/'+custId);
    }

}

//exporting FeedbackService object
export default new FeedbackService();