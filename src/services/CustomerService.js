import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8082/customer";
const ADMIN_API_BASE_URL = "http://localhost:8082/admin";
class CustomerService{
    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/addCustomer',customer);
    }
    checkCustomer(email,password){
        return axios.get(CUSTOMER_API_BASE_URL+'/verifyCustomer/'+email+'/'+password);
    }
    updateCustomer(customer,email){
        return axios.put(CUSTOMER_API_BASE_URL+'/update/'+email,customer)
    }
    updatePassword(email,password){
        return axios.patch(CUSTOMER_API_BASE_URL+'/updateCustomerPassword/'+email+'/'+password);
    }
    viewCustomer(email){
        return axios.get(CUSTOMER_API_BASE_URL+'/viewCustomer/'+email);
    }
    verifyPhoneNo(email,phoneNo){
        return axios.get(CUSTOMER_API_BASE_URL+'/verifyPhoneNo/'+email+'/'+phoneNo);
    }
    checkAdmin(email,password){
        return axios.get(ADMIN_API_BASE_URL+'/verifyAdmin/'+email+'/'+password);
    }

} 

export default new CustomerService();

