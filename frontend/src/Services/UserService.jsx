import axios  from "axios";


const BASE_API_URL = "http://localhost:8080/";
class UserService {
    userLogin(userData) {
        return axios.post(BASE_API_URL+"auth/login",userData);
    }
    
}

export default new UserService();
