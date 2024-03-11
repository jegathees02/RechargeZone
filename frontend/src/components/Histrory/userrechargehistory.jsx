import { useEffect, useState } from "react";
// import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import UserService from "../../Services/UserService";

const Userrechargehistory = () => {
    const [history, setHistory] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getHistory = async () => {
            try {
                const response = await UserService.getHistoryData(localStorage.getItem('token'), JSON.parse(localStorage.getItem('userData')).id);
                setHistory(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        getHistory();
        setTimeout(() => {
            setLoading(true);
        }, 100);
    }, []);

    const generatePDF = (rowData) => {
        const doc = new jsPDF();

        doc.autoTable({
            head: [['Date', 'Time', 'Amount', 'Plan', 'Recharge By']],
            body: rowData.map((item) => [item.date, item.time, item.planAmount, item.planName, item.rechargedBy]),
        });

        doc.save('recharge_history.pdf');
    };

    return (
        <>
            {loading && (
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
                                {history.map((historyItem, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {historyItem.date}
                                        </th>
                                        <td className="px-6 py-4">{historyItem.time}</td>
                                        <td className="px-6 py-4">{historyItem.planAmount}</td>
                                        <td className="px-6 py-4">{historyItem.planName}</td>
                                        <td className="px-6 py-4">{historyItem.rechargedBy}</td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => generatePDF([historyItem])} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Userrechargehistory;
