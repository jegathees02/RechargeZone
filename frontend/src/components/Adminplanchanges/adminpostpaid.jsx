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

const Adminpostpaid = () => {
    return (
        <>
      <div className="flex flex-col px-6">
        <div className="py-2">
          <div className="py-2 ">
            <h1 className="text-2xl font-semibold dark:text-white">Popular Plans</h1>
          </div>
          <div>
              <Rechargecard offerlists={initialOfferList} />
          </div>
        </div>
        <div  className="py-2">
          <div className="py-2 ">
            <h1 className="text-2xl font-semibold dark:text-white">1 GB/Day plans</h1>
          </div>
          <div>
              <Rechargecard offerlists={initialOfferList} />
          </div>
        </div>
        <div className="py-2">
          <div className="py-2 ">
            <h1 className="text-2xl font-semibold dark:text-white">1.5 GB/Day Plans</h1>
          </div>
          <div>
              <Rechargecard offerlists={initialOfferList} />
          </div>
        </div>

      </div>
      </>
    );
}

export default Adminpostpaid;
