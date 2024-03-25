// import Navbar from "../../../components/Navbar/navbar";
import React, { Suspense, useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
// import { setName } from '../../../redux/userRoleSlice';
// import Sidebar from "../../../components/sidebar/sidebar";
import Footer from "../../../components/Footer/footer";
// import Slider from 'react-slick';
// import { Carousel } from 'flowbite-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userNavbarDatas from '../../../components/Navbar/navbarData';
// import adminNavbarLinks from '../../../components/Navbar/navbarData'; 
import { userSidebarLinks } from "../../../components/sidebar/sidebardata";

import OfferImg from '../../../assets/images/signup.gif';
import UserService from '../../../Services/UserService';
import HomePageBarChart from '../../../components/Charts/homePageBarChart';
// import axios from 'axios';


const LazyNavbar = React.lazy(() => import("../../../components/Navbar/navbar"));
const LazySidebar = React.lazy(() => import("../../../components/sidebar/sidebar"));
// const LazyFooter = React.lazy(() => import("../../../components/Footer/footer"));

const UserHomePage = () => {
  const name = useSelector((state) => state.userRole.name);
  const [planData, setPlanData] = useState([]);
  // const [amountSpent, setAmountSpent] = useState([]);

  useEffect(() => {
    const getPlan = async () => {
      const response = await UserService.getLatestRecharge(localStorage.getItem('token'), JSON.parse(localStorage.getItem('userData')).id);
      setPlanData(response.data);
      console.log(response.data);
      console.log(planData);
      // const response1 = await UserService.getTotalAmountSpend(localStorage.getItem('token'), JSON.parse(localStorage.getItem('userData')).id);
      // setAmountSpent(response1);
      // console.log('Amount spend data',amountSpent);

    }
    getPlan();
  },[]);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
    // const userRole = 'user';
  return (
    <>
    <div className="font-serif flex flex-col dark:text-white bg-white dark:bg-gray-900">
      {/* <Navbar links={userNavbarDatas} /> */}
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <LazyNavbar  links={userNavbarDatas}/>
      </Suspense>

      <div className="flex flex-row">
      <div className="w"> 
      {/* <Sidebar links={userSidebarLinks}/> */}
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <LazySidebar links={userSidebarLinks} />
      </Suspense>
      </div>
      <div className="flex flex-col w-full mx-auto px-10">
        <h1 className="px-7 pt-5 pb-3 text-2xl font-semibold">Hello {name},Good Morning....</h1>
        <div className="justify-center text-center">
        <div className="flex  rounded-lg w-full mx-auto h-48 py-5 bg-gradient-to-r from-green-600 to-emerald-700">
          </div>
          <div className="w-full h-10 top-[-13%] relative flex justify-evenly">
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white ">
            <h1 className="text-green-600 font-medium my-2">Your Pack: {planData.planName}</h1>
          </div>
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white">
            <h1 className="text-green-600 font-medium my-2">Data : {planData.planData} GB/Day</h1>
          </div>
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white">
            <h1 className="text-green-600 font-medium my-2">SMS : {planData.planSms}</h1>
          </div>
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white">
            <h1 className="text-green-600 font-medium my-2">Next recharge : {planData.planValidity} Days</h1>
          </div>
          </div>
          {/* <div className="  p-4 ">
              <div className="border rounded-md grid grid-cols-2 divide-x-2">
                <div className="p-9">
                <h1 className="dark:text-white">Data </h1>
                <h3 className=" text-5xl font-extrabold dark: text-white">2.12 GB</h3>
                <h3 className="dark:text-white">Remaining of 2.50GB</h3>
                <h2 className="dark:text-white">Renews in 10 hours</h2>
                </div>
                <div className="p-9 ">
                  <h1>5G Unlimited</h1>
                  <h1>True 5G</h1>
                </div>
              </div>
          </div> */}
        {/* </div> */}
        </div>
        <div className='py-4  min-h-[35%]'>
          <HomePageBarChart />
        </div>
        <div className="p-4 font-serif">
          <h1 className="text-4xl font-sans font-semibold">Offers</h1>
          {/* <Slider {...settings}> */}
          <div className="flex gap-5">
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">50% off on first recharge</h2>
            </div>
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">10% daily offer</h2>
            </div>
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">Special offer for you</h2>
            </div>
            {/* <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">Offer Name</h2>
            </div> */}
          </div>
            {/* </Slider> */}
        </div>

      </div>
      </div>
    <Footer />
    </div>
    </>
  );
};

export default UserHomePage;
