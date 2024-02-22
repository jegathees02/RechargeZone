import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import Footer from "../../../components/Footer/footer";
// import Slider from 'react-slick';
// import { Carousel } from 'flowbite-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userNavbarDatas from '../../../components/Navbar/navbarData';
import adminNavbarLinks from '../../../components/Navbar/navbarData'; 

import OfferImg from '../../../assets/images/signup.gif';

const UserHomePage = () => {

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
    <div className="flex flex-col dark:text-white">
      <Navbar links={userNavbarDatas} />
      <div className="flex flex-row">
      <div className="w"> <Sidebar links={adminNavbarLinks}/></div>
      <div className="flex flex-col w-full mx-auto px-10">
        <h1 className="px-7 pt-5 pb-3 text-2xl font-semibold">Hello Jegathees,Good Morning....</h1>
        <div className="justify-center text-center">
        <div className="flex  rounded-lg w-full mx-auto h-48 py-5 bg-gradient-to-r from-green-600 to-emerald-700">
          </div>
          <div className="w-full h-10 top-[-13%] relative flex justify-evenly">
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white ">
            <h1 className="text-green-600 font-medium my-2">Your Pack:</h1>
          </div>
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white">
            <h1 className="text-green-600 font-medium my-2">Your Pack:</h1>
          </div>
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white">
            <h1 className="text-green-600 font-medium my-2">Your Pack:</h1>
          </div>
          <div className="border rounded-md h-10 w-48 my-auto relative top-3 bg-white">
            <h1 className="text-green-600 font-medium my-2">Your Pack:</h1>
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
        <div className="p-4">
          <h1 className="text-5xl font-semibold">Offers</h1>
          {/* <Slider {...settings}> */}
          <div className="flex gap-5">
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">Offer Name</h2>
            </div>
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">Offer Name</h2>
            </div>
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">Offer Name</h2>
            </div>
            <div className="border-2 rounded-md p-2 w-48 mt-9 flex flex-col">
              <img className="rounded-xl h-48 w-48  object-cover" src={OfferImg} alt="offerimg" />
              <h2 className="py-4 px-2">Offer Name</h2>
            </div>
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
