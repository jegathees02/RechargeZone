import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/";
class AdminService {
    loginAdmin(adminData){
        return axios.post(BASE_API_URL+"auth/login",adminData);
    }
    
}

export default new AdminService();
