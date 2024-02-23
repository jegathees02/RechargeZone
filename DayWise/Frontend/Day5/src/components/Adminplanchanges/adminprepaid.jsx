// import React from 'react';
import Rechargecard from "../Cards/Rechargecards/rechargecard";

const initialOfferList = [
    {
      id: 1,
      price: "₹ 1499",
      validity: "2 Months",
      subscription: "Disney Hotstar",
      benefits: "Truly Unlimited",
      link: "#",
    },
    {
      id: 2,
      price: "₹ 999",
      validity: "1 Month",
      subscription: "Amazon Prime",
      benefits: "High-Speed Internet",
      link: "#",
    },
];

const Adminprepaid = () => {
    return (
        <div>
            <Rechargecard offerlists={initialOfferList} />
        </div>
    );
}

export default Adminprepaid;
