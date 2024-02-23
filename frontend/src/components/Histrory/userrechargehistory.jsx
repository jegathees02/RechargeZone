// import React from 'react';
import { historyData } from "./userrechargehistorylist";

const Userrechargehistory = () => {
    return (
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
            {historyData.map((history,index) => {
                return(
                <tr key={index}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {history.date}
                    </th>
                    <td className="px-6 py-4">{history.time}</td>
                    <td className="px-6 py-4">{history.amount}</td>
                    <td className="px-6 py-4">{history.plan}</td>
                    <td className="px-6 py-4">{history.rechargeBy}</td>
                    <td className="px-6 py-4">{history.viewBill}</td>
                        {/* {history.amount}
                        {history.plan}
                        {history.rechargeBy}
                        {history.viewBill} */}
                    {/* </td> */}

                </tr>
            );
            })}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
        </tbody>
    </table>
</div>

            
        </div>
    );
}

export default Userrechargehistory;
