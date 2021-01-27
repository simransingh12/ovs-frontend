import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8082";

class CartService{
    
    getCartByEmail(email){
        return axios.get(EMPLOYEE_API_BASE_URL+'/viewCart/'+email);
    }
    deleteVegFromCart(email,vegName){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/removeVegFromCart/'+email+'/'+vegName);
    }
    updateQtyOfVeg(email,vegName,qty){
        return axios.put(EMPLOYEE_API_BASE_URL+'/updateQtyOfVeg/'+email+'/'+vegName+'/'+qty);
    }
    addToCart(email,vegId){
        return axios.post(EMPLOYEE_API_BASE_URL+'/addToCart/'+email+'/'+vegId);
    }

}

export default new CartService();