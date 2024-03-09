
import { useEffect, useState } from "react";
import Rechargecard from "../Cards/Rechargecards/rechargecard";
import AdminService from "../../Services/AdminService";

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

const Adminprepaid = () => {
  const [gb1,setGb1] = useState([]);
  const [gb1_5,setGb1_5] = useState([]);
  const [gb2,setGb2] = useState([]);
  useEffect(() => {
    const fetchPlans = async() => {
      try{
        const response1 = await AdminService.rechageplans(localStorage.getItem('token'), "jio","1", "prepaid");
        setGb1(response1.data);

        const response1_5 = await AdminService.rechageplans(localStorage.getItem('token'), "jio","1.5", "prepaid");
        setGb1_5(response1_5.data);

        const response2 = await AdminService.rechageplans(localStorage.getItem('token'), "jio","2", "prepaid");
        setGb2(response2.data);
        console.log(response1.data);
      }
      catch(e) {
        console.log(e);
      }
    }
    fetchPlans();
  },[]);
    return (
      <>
      <div className="flex flex-col px-6">
        <div className="py-2">
          <div className="py-2 ">
            <h1 className="text-2xl font-semibold dark:text-white">1 GB/Day Plans</h1>
          </div>
          <div>
            {console.log(gb1)}
              <Rechargecard offerlists={gb1} />
          </div>
        </div>
        <div  className="py-2">
          <div className="py-2 ">
            <h1 className="text-2xl font-semibold dark:text-white">1.5 GB/Day plans</h1>
          </div>
          <div>
              <Rechargecard offerlists={gb1_5} />
          </div>
        </div>
        <div className="py-2">
          <div className="py-2 ">
            <h1 className="text-2xl font-semibold dark:text-white">2 GB/Day Plans</h1>
          </div>
          <div>
              <Rechargecard offerlists={gb2} />
          </div>
        </div>

      </div>
      </>
        // <div>
        //     <Rechargecard offerlists={initialOfferList} />
        // </div>
    );
}

export default Adminprepaid;
