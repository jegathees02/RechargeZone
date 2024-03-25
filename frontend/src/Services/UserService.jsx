import axios  from "axios";


const BASE_API_URL = "http://localhost:8080/";
class UserService {
    userLogin(userData) {
        return axios.post(BASE_API_URL+"auth/login",userData);
    }
    userSingUp(userData) {
        return axios.post(BASE_API_URL+"auth/register",userData);
    }

    // //get recharge plans
    rechageplans(token, operator, data,types) {
        console.log(operator);
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL+`user/getplansbyoperatoranddataandtype/${operator}/${data}/${types}`,config);
    }

    rechageplansPostpaid(token,operator,validity,types) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL+`user/getplansbyoperatorandvalidityandtype/${operator}/${validity}/${types}`,config);
    }

    getrechageplanbyId(token, id) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL+`user/getRechargePlanByUserId/${id}`,config);
    }

    updateprofile(token,userData) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.put(BASE_API_URL+`user/update-profile`,userData,config);
    }

    addRechargePayment(token, userid, planid) {
        // const convertedPlanId = parseInt(planid);
        console.log(token);
        console.log(userid);
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.post(BASE_API_URL+`user/recharge/${userid}/${planid}`,config);
    }

    getHistoryData(token,userid) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL+`user/getRechargeById/${userid}`,config);
    }

    getLatestRecharge(token,userid) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL+`user/getLatestRechargeByUserId/${userid}`,config);
    }

    getTotalAmountSpend(token, userid) {
        const config = {
            headers : {
            Authorization : `Bearer ${token}`,
        },
        };
        return axios.get(BASE_API_URL + `user/getamountspent/${userid}`, config)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error:", error);
            throw error; // or handle the error as required
        });
    }

    // viewprepaidplans(token,operator,data,types) {
    //     const config = {
    //         headers : {
    //             Authorization : `Bearer ${token}`,
    //         },
    //     };
    //     return axios.get(BASE_API_URL+`user/getplansbyoperatoranddataandtype/${operator}/${data}/${types}`,config);
    // }
    
}

export default new UserService();
