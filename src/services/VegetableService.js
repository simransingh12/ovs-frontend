import axios from 'axios';

const VEGETABLE_API_BASE_URL = "http://localhost:8082/vegetable";

class VegetableService {
    getVegetable(){
        return axios.get(VEGETABLE_API_BASE_URL);
    }

    getVegetableByLessThan20Price(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetablePriceLessThan20');
    }

    getVegetableByGreaterThan101Price(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetablePriceGreaterThan100');
    }

    getVegetableByPriceBetween21to50(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetablePriceBetween21to50');
    }

    getVegetableByPriceBetween51to100(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetablePriceBetween51to100');
    }

    getVegetableByTypeLeafyGreen(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetableTypeLeafygreen');
    }

    getVegetableByTypeCruciferous(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetableTypeCruciferous');
    }

    getVegetableByTypeMarrow(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetableTypeMarrow');
    }

    getVegetableByTypeRoot(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetableTypeRoot');
    }

    getVegetableByTypeEdiblePlantSteam(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetableTypeEdiblePlantSteam');
    }

    getVegetableByTypeAllium(){
        return axios.get(VEGETABLE_API_BASE_URL+'/getByVegetableTypeAllium');
    }

    createVegetable(vegetable){
        return axios.post(VEGETABLE_API_BASE_URL,vegetable);
    }

    getVegetableById(vegId){
        return axios.get(VEGETABLE_API_BASE_URL+'/'+vegId);
    }

    updateVegetable(vegetable, vegId){
        return axios.put(VEGETABLE_API_BASE_URL+'/'+vegId,vegetable);
    }

    deleteVegetable(vegId){
        return axios.delete(VEGETABLE_API_BASE_URL+'/'+vegId);
    }
}

//exporting EmployeeService object
export default new VegetableService();