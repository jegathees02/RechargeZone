// import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserService from '../../Services/UserService';
import { useEffect, useState } from 'react';


// const offerList = [
//   {
//     id : 1,
//     price: "₹ 1499",
//     validity: "2 Months",
//     subscription: "Disney Hotstar",
//     benefits: "Truly Unlimited",
//     link: "#",
//   },
//   {
//     id : 2,
//     price: "₹ 999",
//     validity: "1 Month",
//     subscription: "Amazon Prime",
//     benefits: "High-Speed Internet",
//     link: "#",
//   },
//   {
//       id : 3,
//       price: "₹ 799",
//       validity: "2 Months",
//       subscription: "Disney Hotstar",
//       benefits: "Truly Unlimited",
//       link: "#",
//     },
//     {
//       id : 4,
//       price: "₹ 299",
//       validity: "1 Month",
//       subscription: "Amazon Prime",
//       benefits: "High-Speed Internet",
//       link: "#",
//     },
//   // Add more offers as needed
// ];


// eslint-disable-next-line react/prop-types
const ViewRecharge = () => {

  // const offer = offerList[id];
  const [offer,setOffer] = useState(null);
  
  // const { id } = useParams();
  const { id } = useParams();

  const handleRecharge = async () => {
    try{
      // console.log(id);
      const response = await UserService.addRechargePayment(localStorage.getItem('token'),JSON.parse(localStorage.getItem('userData')).id,id);
      // const amountx= 250
        var options = {
          key: "rzp_test_gs53Ffayhc0t6X",
          key_secret: "QqLcxJhbf5IjkKpnAfQIrjvd",
          amount: offer[0].planAmount*100,
          currency: "INR",
          name: "RechargeZone Payment Gateway",
          description: "for testing purpose",
          handler: function (response) {
            alert(response.razorpay_payment_id)
          },
          prefill: {
            name: "DEEPAK",
            email: "deepakprabu1234@gmail.com",
            contact: "8754988838"
          },
          notes: {
            address: "Sri krishna college of Engineering and Technology"
          },
          theme: {
            color: "#3399cc"
          }
        }
    
        var pay = new window.Razorpay(options)
        pay.open()
      console.log(response);
      // if(response.data == "added"){
      //   alert("Rechage Successful");
      // }
    }
    catch (e){
      console.log(e);
    }
  }
  useEffect(() => {
    const fetchrechageplan = async() => {
      try{
        const response = await UserService.getrechageplanbyId(localStorage.getItem('token'), id);
        setOffer(response.data);
        console.log(response);
      }
      catch(e) {
        console.log(e);
      }
    }
    fetchrechageplan();
  },[]);

  if (!offer) {
    return <div>Offer not found</div>; // Or handle error in another way
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Recharge Details</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Price: {offer[0].planAmount}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Validity: {offer[0].planValidity}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Subscription: {offer[0].plansubscription}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">SMS {offer[0].planSms}</h2>
          {console.log(offer[0].planSms)}
        </div>
        <div className="mt-8 ">
          <button onClick={() => handleRecharge()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-10 px-10 rounded-md ">
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
