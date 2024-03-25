// import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import AdminService from '../../../Services/AdminService';

// const initialOfferList = [
    
//         {
//           "id": 5,
//           "operator": "jio",
//           "planType": "prepaid",
//           "planName": "jio basic Unlimited",
//           "planValidity": "28",
//           "planAmount": "209",
//           "planDescription": "Get unlimited data with 1GB/Day",
//           "planData": "1",
//           "planTalktime": "null",
//           "planSms": "100",
//           "plansubscription": "jio cinema, jio savn"
//         },
//         {
//             "id": 6,
//             "operator": "jio",
//             "planType": "prepaid",
//             "planName": "jio basic Unlimited",
//             "planValidity": "28",
//             "planAmount": "209",
//             "planDescription": "Get unlimited data with 1GB/Day",
//             "planData": "1",
//             "planTalktime": "null",
//             "planSms": "100",
//             "plansubscription": "jio cinema, jio savn"
//           },
      
// ];

const Rechargecard = ( { offerlists } ) => {
    console.log(offerlists);
    const [offerList, setOfferList] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    // const [newOfferData, setNewOfferData] = useState({});
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    var [selectedOffer, setSelectedOffer] = useState({});

    const [addOffer, setAddOffer] = useState({
        name : '',
        price : '',
        validity : '',
        subscription : '',
        description : '',
        talktime : '',
        data : '',
        sms : ''
    })

    useEffect(() => {
        const adddata = () => {
            setOfferList(offerlists);
        }
        adddata();
    },);

    // const handleAddOffer = () => {
    //     console.log(offerList);
    //     setShowAddModal(true);
    // };

    const handleDeleteOffer = async(id) => {
        try{
            console.log(id);
            const response = await AdminService.deleteRechagePlans(localStorage.getItem('token'),id);
            console.log(response);
            window.location.reload();
        }
        catch(e) {
            console.log(e);
            alert(e);
        }
        // const updatedList = offerList.filter(offer => offer.id !== id);
        // setOfferList(updatedList);
    };

    const handleUpdateOffer = (offer) => {
        console.log(offer);
        setSelectedOffer(offer);
        console.log(selectedOffer);
        setShowUpdateModal(true);
    };
    
    const handleAddModalClose = () => {
        setShowAddModal(false);
    };

    const handleUpdateModalClose = () => {
        setShowUpdateModal(false);
    };
    
    const handleAddModalSubmit = async() => {
        const planData = {
            'operator' : "jio",
            'planType' : localStorage.getItem('simType'),
            'planName' : addOffer.name,
            'planValidity' : addOffer.validity,
            'planAmount' : addOffer.price,
            'planDescription' : addOffer.description,
            'planTalktime' : addOffer.talktime,
            'planSms' : addOffer.sms,
            'planData' : addOffer.data,
            'plansubscription' : addOffer.subscription
        }
        console.log(planData);
        try{
            console.log(planData);
            const response = await AdminService.addRecharePlans(localStorage.getItem('token'), planData);
            console.log(response);
            
        }
        catch (e) {
            console.log(e);
            alert(e);
        }
        // const newOffer = {
        //     id: offerList.length + 1,
        //     ...newOfferData
        // };
        setOfferList([...offerList, addOffer]);
        setShowAddModal(false);
        setAddOffer({});
        // Window.reload();
        window.location.reload();
    };

    const handleUpdateModalSubmit = async() => {
        const planData = {
            'id' : selectedOffer.id,
            'operator' : "jio",
            'planType' : localStorage.getItem('simType'),
            'planName' : selectedOffer.planName,
            'planValidity' : selectedOffer.planValidity,
            'planAmount' : selectedOffer.planAmount,
            'planDescription' : selectedOffer.planDescription,
            'planTalktime' : selectedOffer.planTalktime,
            'planSms' : selectedOffer.planSms,
            'planData' : selectedOffer.planData,
            'plansubscription' : selectedOffer.plansubscription
        }
        console.log(planData);
        try{
            console.log('plan data',planData);
            console.log(selectedOffer.id);
            const response = await AdminService.updateRechargePlans(localStorage.getItem('token'),`${selectedOffer.id}`, planData);
            console.log('response',response);

            setOfferList([...offerList, selectedOffer]);
            setShowAddModal(false);
            setAddOffer({});
            window.location.reload();
            
        }
        catch (e) {
            console.log(e);
            alert(e);
        }
        // const newOffer = {
        //     id: offerList.length + 1,
        //     ...newOfferData
        // };
        
        // Window.reload();
        
    };
    
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewOfferData(prevData => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

    return (
        <div className="font-serif ">
            <div className="flex gap-2">
                {offerList.map((offer) => (
                    <div key={offer.id} className="inline-block relative">
                        <div className="absolute top-[-2%] bg-gray-600 right-0 flex gap-2 mt-2 mr-2">
                            {/* <FontAwesomeIcon icon={faPlus} onClick={handleAddOffer} className="text-green-500  cursor-pointer"  /> */}
                            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteOffer(offer.id)} className="text-red-500 cursor-pointer"  />
                            <FontAwesomeIcon icon={faEdit} onClick={() => handleUpdateOffer(offer)} className="text-blue-500 cursor-pointer" />
                        </div>
                        <div className="text-white border-2 rounded-xl p-2 w-60  mt-2 flex flex-col dark:bg-gray-900">
                            <div className="flex justify-between py-2">
                                <div>
                                    <h1 className="text-2xl font-bold text-[#01c293]">{offer.planAmount}</h1>
                                </div>
                                <div className="flex flex-col text-black dark:text-white">
                                    <h1>Data:</h1>
                                    <h1>{offer.planData} GB</h1>
                                </div>
                            </div>
                            <div className="py-1">
                                <a href={''} className="text-blue-600">View Details</a>
                            </div>
                            <div className="flex py-2 justify-between text-black dark:text-white">
                                <div>
                                    <h1>Validity: <br /> {offer.planValidity} Days</h1>
                                </div>
                                <div>
                                    <h1>SMS :<br /> {offer.planSms} / Day</h1>
                                </div>
                            </div>
                            <div className="py-2 text-black dark:text-white">
                                <h1>Subscriptions:</h1>
                                <h1>{offer.plansubscription}</h1>
                            </div>
                            {/* <div className="py-4 w-full justify-center items-center mx-auto">
                                <Link to={`/user/recharge/${offer.id}`} className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">
                                    Recharge
                                </Link>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
            {showAddModal && (
                <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Add New Offer</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <h1>Plan Name</h1>
                                <input type="text" name="planName" placeholder="plan Name"
                                 onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    name : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="planAmount" placeholder="Price"
                                 onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    price : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="validity" placeholder="Validity" 
                                onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    validity : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="data" placeholder="Plan Data" 
                                onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    data : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="talktime" placeholder="Plan Talktime" 
                                onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    talktime : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="description" placeholder="description" 
                                onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    description : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="subscription" placeholder="Subscription" 
                                onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    subscription : e.target.value,
                                 })} />
                            </div>
                            <div>
                                <input type="text" name="sms" placeholder="SMS" 
                                onChange={(e) => setAddOffer({
                                    ...addOffer,
                                    sms : e.target.value,
                                 })} />
                            </div>
                        </div>
                        {/* Add other input fields as needed */}
                        <div className="flex justify-end mt-4">
                            <button onClick={handleAddModalClose} className="mr-2">Cancel</button>
                            <button onClick={handleAddModalSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            {showUpdateModal && (
                <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Update Offer</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <h1>Plan Name</h1>
                                <input type="text" name="planName" placeholder="plan Name" defaultValue={selectedOffer.planName}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planName : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan Amount</h1>
                                <input type="text" name="planAmount" placeholder="Price" defaultValue={selectedOffer.planAmount}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planAmount : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan validity</h1>
                                <input type="text" name="validity" placeholder="Validity" defaultValue={selectedOffer.planValidity}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planValidity : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan Data</h1>
                                <input type="text" name="data" placeholder="Plan Data"  defaultValue={selectedOffer.planData}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planData : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan Talktime</h1>
                                <input type="text" name="talktime" placeholder="Plan Talktime" defaultValue={selectedOffer.planTalktime}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planTalktime : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan Description</h1>
                                <input type="text" name="description" placeholder="description"  defaultValue={selectedOffer.planDescription}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planDescription : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan Subscription</h1>
                                <input type="text" name="subscription" placeholder="Subscription" defaultValue={selectedOffer.plansubscription}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    plansubscription : e.target.value,
                                })} />
                            </div>
                            <div>
                                <h1>Plan SMS</h1>
                                <input type="text" name="sms" placeholder="SMS"  defaultValue={selectedOffer.planSms}
                                onChange={(e) => setSelectedOffer({
                                    ...selectedOffer,
                                    planSms : e.target.value,
                                })} />
                            </div>
                                {/* <div>
                                    <input type="text" name="price" placeholder="Price" defaultValue={selectedOffer.planAmount} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <input type="text" name="validity" placeholder="Validity" defaultValue={selectedOffer.planValidity} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <input type="text" name="subscription" placeholder="subscription" defaultValue={selectedOffer.plansubscription} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <input type="text" name="benefits" placeholder="SMS" defaultValue={selectedOffer.planSms} onChange={handleInputChange} />
                                </div> */}
                        </div>
                        {/* Add other input fields as needed */}
                        <div className="flex justify-end mt-4">
                            <button onClick={handleUpdateModalClose} className="mr-2">Cancel</button>
                            <button onClick={handleUpdateModalSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
Rechargecard.propTypes = {
    offerlists : PropTypes.array.isRequired,
};

export default Rechargecard;




