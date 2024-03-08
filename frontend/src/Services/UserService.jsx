import axios  from "axios";


const BASE_API_URL = "http://localhost:8080/";
class UserService {
    userLogin(userData) {
        return axios.post(BASE_API_URL+"auth/login",userData);
    }
    userSingUp(userData) {
        return axios.post(BASE_API_URL+"auth/register",userData);
    }

    //get recharge plans
    rechageplans(token, operator, data,types) {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        };
        return axios.get(BASE_API_URL+`user/getplansbyoperatoranddataandtype/${operator}/${data}/${types}`,config);
    }
    
}

export default new UserService();
