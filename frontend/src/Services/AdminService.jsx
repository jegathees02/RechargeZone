import axios from 'axios';

const BASE_API_URL = "http://localhost:8080/";
class AdminService {
    loginAdmin(adminData){
        return axios.post(BASE_API_URL+"auth/login",adminData);
    }
    //get recharge plans
    rechageplans(token, operator, data,types) {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        };
        return axios.get(BASE_API_URL+`admin/getplansbyoperatoranddataandtype/${operator}/${data}/${types}`,config);
    }

    addRecharePlans(token, planData) {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        };
        return axios.post(BASE_API_URL+`admin/addplans`,planData,config);
    }

    rechageplansPostpaid(token,operator,validity,types) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL+`admin/getplansbyoperatorandvalidityandtype/${operator}/${validity}/${types}`,config);
    }

    updateRechargePlans(token, id, planData) {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        };
        return  axios.put(BASE_API_URL+`admin/updateplans/${id}`,planData,config);
    }

    deleteRechagePlans(token, id) {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        };
        console.log(token);
        console.log(id);
        return axios.delete(BASE_API_URL+`admin/deleteplans/${id}`,config);
    }

    updateProfile(token, userData) {
        const config = {
            headers : {
                Authorization : `Bearer ${token}`,
            },
        };
        return axios.put(BASE_API_URL+'updateprofile',userData,config);
    }
    
}

export default new AdminService();
