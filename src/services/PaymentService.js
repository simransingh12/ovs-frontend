import axios from 'axios';

const PAYMENT_API_BASE_URL = "http://localhost:8082";

class PaymentService {

    viewMyListOfVegs(email){
        return axios.get(PAYMENT_API_BASE_URL+'/viewMyListOfVegs/'+email);
    }

    makePayment(email){
        return axios.get(PAYMENT_API_BASE_URL+'/makePayment/'+email);
    }
    
    
}

export default new PaymentService();