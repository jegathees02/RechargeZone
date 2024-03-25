import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rechargeOthersImg from '../../assets/images/rechargeOther1.gif';  

const Rechargeother = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [serviceProvider, setServiceProvider] = useState('');
    const [simType, setSimType] = useState('');

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform actions with the input values (e.g., make an API call)
        console.log('Mobile Number:', mobileNumber);
        console.log('Service Provider:', serviceProvider);
        console.log('SIM Type:', simType);
        // Close modal or reset form
        closeModal();
        alert("Recharge Successful");
        navigate('/user/recharge/other')
    };

    return (
        <div className="min-h-[60%] flex justify-center items-center">
            <div className="shadow-xl border-4 border-churn rounded-2xl bg-green-50 py-3 -px-3 flex flex-col sm:flex-row">
                <div className="flex w-1/2 justify-center mb-6 sm:mb-0 sm:mr-6">
                    <img className="h-full sm:w-full object-cover object-center" src={rechargeOthersImg} alt="recharge for friend" />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-bold mb-4">Recharge for your friend...</h1>
                    <h1 className="text-lg">Share your love with recharges</h1>
                    <button onClick={openModal} className='rounded-md border border-gray-900 py-2 px-4 mt-4'>Proceed</button>
                </div>
            </div>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-lg font-bold mb-4">Enter Recharge Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <input type="text" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">Service Provider</label>
                                <input type="text" id="serviceProvider" value={serviceProvider} onChange={(e) => setServiceProvider(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="simType" className="block text-sm font-medium text-gray-700">SIM Type</label>
                                <input type="text" id="simType" value={simType} onChange={(e) => setSimType(e.target.value)} className="mt-1 p-2 border border-gray-300  rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="simType" className="block text-sm font-medium text-gray-700">Plan Amount</label>
                                <input type="text" id="simType" value={simType} onChange={(e) => setSimType(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-churn text-white rounded-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Rechargeother;
