// import React from 'react';
import { useEffect, useState } from "react";
// import { historyData } from "./userrechargehistorylist";
import UserService from "../../Services/UserService";

const Userrechargehistory = () => {
    const [history,setHistory] = useState(null);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        const getHistory = async() => {
            try{
                const response = await UserService.getHistoryData(localStorage.getItem('token'), JSON.parse(localStorage.getItem('userData')).id);
                setHistory((response.data));
                console.log(history);
            }
            catch (e) {
                console.log(e);
            }
        }
        getHistory();
        setTimeout(() => {
            setLoading(true);
            // Code to be executed after 3 seconds
        }, 100);
    },[]); // Include 'history' in the dependency array
    return (
        <>
        {loading && 
        <div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Plan
                </th>
                <th scope="col" className="px-6 py-3">
                    Recharge By
                </th>
                <th scope="col" className="px-6 py-3">
                    View Bill
                </th>
            </tr>
        </thead>
        <tbody>
            {history.map((history,index) => {
                return(
                <tr key={index}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {history.date}
                    </th>
                    <td className="px-6 py-4">{history.time}</td>
                    <td className="px-6 py-4">{history.planAmount}</td>
                    <td className="px-6 py-4">{history.planName}</td>
                    <td className="px-6 py-4">{history.rechargedBy}</td>
                    <td className="px-6 py-4">{history.viewBill}</td>

                </tr>
            );
            })}
        </tbody>
    </table>
</div>

            
        </div>
        }
        </>
    );
}

export default Userrechargehistory;
