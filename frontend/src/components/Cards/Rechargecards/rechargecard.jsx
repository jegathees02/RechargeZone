import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

// const initialOfferList = [
//     {
//       id: 1,
//       price: "₹ 1499",
//       validity: "2 Months",
//       subscription: "Disney Hotstar",
//       benefits: "Truly Unlimited",
//       link: "#",
//     },
//     {
//       id: 2,
//       price: "₹ 999",
//       validity: "1 Month",
//       subscription: "Amazon Prime",
//       benefits: "High-Speed Internet",
//       link: "#",
//     },
// ];

const Rechargecard = ( { offerlists } ) => {
    const [offerList, setOfferList] = useState(offerlists);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newOfferData, setNewOfferData] = useState({});
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    const handleAddOffer = () => {
        setShowAddModal(true);
    };

    const handleDeleteOffer = (id) => {
        const updatedList = offerList.filter(offer => offer.id !== id);
        setOfferList(updatedList);
    };

    const handleUpdateOffer = (offer) => {
        setSelectedOffer(offer);
        setShowUpdateModal(true);
    };
    
    const handleAddModalClose = () => {
        setShowAddModal(false);
    };

    const handleUpdateModalClose = () => {
        setShowUpdateModal(false);
    };
    
    const handleAddModalSubmit = () => {
        const newOffer = {
            id: offerList.length + 1,
            ...newOfferData
        };
        setOfferList([...offerList, newOffer]);
        setShowAddModal(false);
        setNewOfferData({});
    };

    const handleUpdateModalSubmit = () => {
        const updatedList = offerList.map(offer => {
            if (offer.id === selectedOffer.id) {
                return {
                    ...offer,
                    ...newOfferData
                };
            }
            return offer;
        });
        setOfferList(updatedList);
        setShowUpdateModal(false);
        setNewOfferData({});
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewOfferData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="flex gap-2">
                {offerList.map((offer) => (
                    <div key={offer.id} className="inline-block relative">
                        <div className="absolute top-[-2%] bg-gray-600 right-0 flex gap-2 mt-2 mr-2">
                            <FontAwesomeIcon icon={faPlus} onClick={handleAddOffer} className="text-green-500  cursor-pointer"  />
                            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteOffer(offer.id)} className="text-red-500 cursor-pointer"  />
                            <FontAwesomeIcon icon={faEdit} onClick={() => handleUpdateOffer(offer)} className="text-blue-500 cursor-pointer" />
                        </div>
                        <div className="text-white border-2 rounded-xl p-2 w-60  mt-2 flex flex-col dark:bg-gray-900">
                            <div className="flex justify-between py-2">
                                <div>
                                    <h1 className="text-2xl font-bold text-[#01c293]">{offer.price}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <h1>Validity:</h1>
                                    <h1>{offer.validity}</h1>
                                </div>
                            </div>
                            <div className="py-1">
                                <a href={offer.link} className="text-blue-600">View Details</a>
                            </div>
                            <div className="flex py-2 justify-between">
                                <div>
                                    <h1>Validity: <br /> {offer.validity}</h1>
                                </div>
                                <div>
                                    <h1>Benefits :<br /> {offer.benefits}</h1>
                                </div>
                            </div>
                            <div className="py-2">
                                <h1>Subscriptions:</h1>
                                <h1>{offer.subscription}</h1>
                            </div>
                            <div className="py-4 w-full justify-center items-center mx-auto">
                                <Link to={`/user/recharge/${offer.id}`} className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">
                                    Recharge
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showAddModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Add New Offer</h2>
                        <input type="text" name="price" placeholder="Price" onChange={handleInputChange} />
                        <input type="text" name="validity" placeholder="Validity" onChange={handleInputChange} />
                        <input type="text" name="subscription" placeholder="Subscription" onChange={handleInputChange} />
                        <input type="text" name="benefits" placeholder="Benefits" onChange={handleInputChange} />
                        {/* Add other input fields as needed */}
                        <div className="flex justify-end mt-4">
                            <button onClick={handleAddModalClose} className="mr-2">Cancel</button>
                            <button onClick={handleAddModalSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            {showUpdateModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Update Offer</h2>
                        <input type="text" name="price" placeholder="Price" defaultValue={selectedOffer.price} onChange={handleInputChange} />
                        <input type="text" name="validity" placeholder="Validity" defaultValue={selectedOffer.validity} onChange={handleInputChange} />
                        <input type="text" name="subscription" placeholder="subscription" defaultValue={selectedOffer.subscription} onChange={handleInputChange} />
                        <input type="text" name="benefits" placeholder="Benefits" defaultValue={selectedOffer.benefits} onChange={handleInputChange} />
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

















// import { Link } from "react-router-dom";
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

// const offerList = [
//     {
//       price: "₹ 1499",
//       validity: "2 Months",
//       subscription: "Disney Hotstar",
//       benefits: "Truly Unlimited",
//       link: "#",
//     },
//     {
//       price: "₹ 999",
//       validity: "1 Month",
//       subscription: "Amazon Prime",
//       benefits: "High-Speed Internet",
//       link: "#",
//     },
//     {
//         price: "₹ 1499",
//         validity: "2 Months",
//         subscription: "Disney Hotstar",
//         benefits: "Truly Unlimited",
//         link: "#",
//       },
//       {
//         price: "₹ 999",
//         validity: "1 Month",
//         subscription: "Amazon Prime",
//         benefits: "High-Speed Internet",
//         link: "#",
//       },
//     // Add more offers as needed
// ];


// const Rechargecard = () => {
//     const [selectedOffer, setSelectedOffer] = useState(null);
//     const [showAddModal, setShowAddModal] = useState(false); // State to manage modal visibility
//     const [newOfferData, setNewOfferData] = useState({});

//     const handleAddOffer = () => {
//         setShowAddModal(true); // Show the add modal
//       };

//       const handleDeleteOffer = () => {
//         setShowAddModal(true); // Show the add modal
//       };

//       const handleUpdateOffer = () => {
//         setShowAddModal(true); // Show the add modal
//       };
    
//       const handleAddModalClose = () => {
//         setShowAddModal(false); // Close the add modal
//       };
    
//       const handleAddModalSubmit = () => {
//         // Add the new offer data to the state or perform other actions
//         console.log('New Offer Data:', newOfferData);
//         setShowAddModal(false); // Close the add modal
//         // Reset the new offer data
//         setNewOfferData({});
//       };
    
//       const handleInputChange = (e) => {
//         // Update the new offer data when input changes
//         const { name, value } = e.target;
//         setNewOfferData(prevData => ({
//           ...prevData,
//           [name]: value
//         }));
//       };

      
//     return (
//         <div>
//             <div className="flex gap-2">
//                 {offerList.map((offer, index) => (
//                     <div key={index} className="inline-block relative">
//                         <div className="absolute top-0 right-0 flex gap-2 mt-2 mr-2">
//                             <FontAwesomeIcon icon={faPlus} onClick={handleAddOffer} className="text-green-500 cursor-pointer"  />
//                             <FontAwesomeIcon icon={faTrash} onClick={handleDeleteOffer} className="text-red-500 cursor-pointer"  />
//                             <FontAwesomeIcon icon={faEdit} onClick={handleUpdateOffer} className="text-blue-500 cursor-pointer" />
//                         </div>
//                         <div className="text-white border-2 rounded-xl p-2 w-60  mt-2 flex flex-col dark:bg-gray-900">
//                             <div className="flex justify-between py-2">
//                                 <div>
//                                     <h1 className="text-2xl font-bold text-[#01c293]">{offer.price}</h1>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <h1>Validity:</h1>
//                                     <h1>{offer.validity}</h1>
//                                 </div>
//                             </div>
//                             <div className="py-1">
//                                 <a href={offer.link} className="text-blue-600">View Details</a>
//                             </div>
//                             <div className="flex py-2 justify-between">
//                                 <div>
//                                     <h1>Validity: <br /> {offer.validity}</h1>
//                                 </div>
//                                 <div>
//                                     <h1>Benefits :<br /> {offer.benefits}</h1>
//                                 </div>
//                             </div>
//                             <div className="py-2">
//                                 <h1>Subscriptions:</h1>
//                                 <h1>{offer.subscription}</h1>
//                             </div>
//                             <div className="py-4 w-full justify-center items-center mx-auto">
//                                 <Link to={`/user/recharge/${index}`} className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">
//                                     Recharge
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {showAddModal && (
//                 <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
//                 <div className="bg-white p-4 rounded-lg">
//                     <h2 className="text-xl font-semibold mb-2">Add New Offer</h2>
//                     <input type="text" name="price" placeholder="Price" onChange={handleInputChange} />
//                     <input type="text" name="validity" placeholder="Validity" onChange={handleInputChange} />
//                     {/* Add other input fields as needed */}
//                     <div className="flex justify-end mt-4">
//                     <button onClick={handleAddModalClose} className="mr-2">Cancel</button>
//                     <button onClick={handleAddModalSubmit}>Submit</button>
//                     </div>
//                 </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Rechargecard;
