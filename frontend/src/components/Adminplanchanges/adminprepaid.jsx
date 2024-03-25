
import { useEffect, useState } from "react";
import Rechargecard from "../Cards/Rechargecards/rechargecard";
import AdminService from "../../Services/AdminService";
import HashLoader from "react-spinners/HashLoader"

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
  const [loading, setLoading] = useState(true);
  const [gb1,setGb1] = useState([]);
  const [gb1_5,setGb1_5] = useState([]);
  const [gb2,setGb2] = useState([]);
  const [serviceProvider,setServiceProvider] = useState('jio');
  const [showAddModal, setShowAddModal] = useState(false);
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

  const handleAddOffer = () => {
    // console.log(offerList);
    setShowAddModal(true);
  };
  const handleAddModalClose = () => {
    setShowAddModal(false);
  };
  const handleAddModalSubmit = async() => {
    const planData = {
        'operator' : serviceProvider,
        'planType' : "prepaid",
        'planName' : addOffer.name,
        'planValidity' : addOffer.validity,
        'planAmount' : addOffer.price,
        'planDescription' : addOffer.description,
        'planTalktime' : addOffer.talktime,
        'planSms' : addOffer.sms,
        'planData' : addOffer.data,
        'plansubscription' : addOffer.subscription
    }
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
    // setOfferList([...offerList, addOffer]);
    setShowAddModal(false);
    setAddOffer({});
    // Window.reload();
    window.location.reload();
  };
  const handlejio = async() => {
    setServiceProvider('jio');
    setLoading(true);
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
    setLoading(false);
  }
  const handleairtel = async() => {
    setLoading(true);
    setServiceProvider('airtel');
    try{
      const response1 = await AdminService.rechageplans(localStorage.getItem('token'), "airtel","1", "prepaid");
      setGb1(response1.data);

      const response1_5 = await AdminService.rechageplans(localStorage.getItem('token'), "airtel","1.5", "prepaid");
      setGb1_5(response1_5.data);

      const response2 = await AdminService.rechageplans(localStorage.getItem('token'), "airtel","2", "prepaid");
      setGb2(response2.data);
      console.log(response1.data);
    }
    catch(e) {
      console.log(e);
    }
    setLoading(false);
  }
  const handlevi = async() => {
    setServiceProvider('vi');
    setLoading(true);
    try{
      const response1 = await AdminService.rechageplans(localStorage.getItem('token'), "vi","1", "prepaid");
      setGb1(response1.data);

      const response1_5 = await AdminService.rechageplans(localStorage.getItem('token'), "vi","1.5", "prepaid");
      setGb1_5(response1_5.data);

      const response2 = await AdminService.rechageplans(localStorage.getItem('token'), "vi","2", "prepaid");
      setGb2(response2.data);
      console.log(response1.data);
      localStorage.setItem('simType', "prepaid");
    }
    catch(e) {
      console.log(e);
    }
    setLoading(false);
  }

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
    setLoading(false);
  },[]);
  if(loading) {
    return(
      <div className="mx-auto mt-[20%] justify-center  flex">
        <HashLoader color="#01c293" size={100} />
      </div>
    )
  }
    return (
      <>
      <div className="flex flex-col px-6 h-full bg-white  dark:bg-gray-900">
        <div className="py-5">
          <div className="w-2/4   rounded-xl bg-gray-200 border-gray-700 border-1 dark:bg-gray-800 min-h-9 flex justify-evenly text-white">
            {/* <div></div> */}
            <h1 onClick={handlejio} className={`border rounded-md px-4 my-auto text-black cursor-pointer   ${serviceProvider === 'jio' ? 'text-black dark:text-white bg-churn bg-opacity-70' : ''}`}>Jio</h1>
            <h2 onClick={handleairtel} className={`border rounded-md px-4 my-auto text-black cursor-pointer ${serviceProvider === 'airtel' ? 'text-black dark:text-white bg-churn bg-opacity-70' : ''}`}>Airtel</h2>
            <h1 onClick={handlevi} className={`border rounded-md px-4 my-auto text-black cursor-pointer ${serviceProvider === 'vi' ? 'text-black dark:text-white bg-churn bg-opacity-70 ' : ''}`}>VI</h1>
          </div>
        </div>
        <div>
        <div className="py-2 flex  gap-5">
            <h1 className="text-2xl font-semibold dark:text-white">1 GB/Day plans</h1>
            <h1 onClick={handleAddOffer} className="cursor-pointer text-sm font-bold border px-3 py-1 rounded-lg text-churn bg:transparent">Add Plan</h1>
          </div>
          <div>
            {console.log(gb1)}
              <Rechargecard offerlists={gb1} />
          </div>
        </div>
        <div  className="py-2">
          <div className="py-2 flex  gap-5">
            <h1 className="text-2xl font-semibold dark:text-white">1.5 GB/Day plans</h1>
            <h1 onClick={handleAddOffer} className="cursor-pointer text-sm font-bold border px-3 py-1 rounded-lg text-churn bg:transparent">Add Plan</h1>
          </div>
          <div>
              <Rechargecard offerlists={gb1_5} />
          </div>
        </div>
        <div className="py-2">
        <div className="py-2 flex  gap-5">
            <h1 className="text-2xl font-semibold dark:text-white">2 GB/Day plans</h1>
            <h1 onClick={handleAddOffer} className="cursor-pointer text-sm font-bold border px-3 py-1 rounded-lg text-churn bg:transparent">Add Plan</h1>
          </div>
          <div>
              <Rechargecard offerlists={gb2} />
          </div>
        </div>

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
      </>
        // <div>
        //     <Rechargecard offerlists={initialOfferList} />
        // </div>
    );
}

export default Adminprepaid;
