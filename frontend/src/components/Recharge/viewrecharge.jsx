// import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const offerList = [
  {
    id : 1,
    price: "₹ 1499",
    validity: "2 Months",
    subscription: "Disney Hotstar",
    benefits: "Truly Unlimited",
    link: "#",
  },
  {
    id : 2,
    price: "₹ 999",
    validity: "1 Month",
    subscription: "Amazon Prime",
    benefits: "High-Speed Internet",
    link: "#",
  },
  {
      id : 3,
      price: "₹ 799",
      validity: "2 Months",
      subscription: "Disney Hotstar",
      benefits: "Truly Unlimited",
      link: "#",
    },
    {
      id : 4,
      price: "₹ 299",
      validity: "1 Month",
      subscription: "Amazon Prime",
      benefits: "High-Speed Internet",
      link: "#",
    },
  // Add more offers as needed
];


// eslint-disable-next-line react/prop-types
const ViewRecharge = () => {

  const { id } = useParams();
  const offer = offerList[id];

  if (!offer) {
    return <div>Offer not found</div>; // Or handle error in another way
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Recharge Details</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Price: {offer.price}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Validity: {offer.validity}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Subscription: {offer.subscription}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Benefits: {offer.benefits}</h2>
        </div>
        <div className="mt-8 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-10 px-10 rounded-md ">
            Recharge
          </button>
        </div>
      </div>
    </div>
  );
};

ViewRecharge.propTypes = {
  id: PropTypes.string.isRequired,
  // propTypes.string.isRequired;
};

export default ViewRecharge;
