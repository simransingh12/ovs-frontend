import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8082";

class OrderService {

    viewOrderByEmail(email){
        return axios.get(ORDER_API_BASE_URL+'/viewOrderByEmail/'+email);
    }
    
    cancelOrder(orderId){
        return axios.delete(ORDER_API_BASE_URL+'/cancelOrder/'+orderId)
    }

}

export default new OrderService();