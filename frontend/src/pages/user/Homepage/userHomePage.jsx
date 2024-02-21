import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import Footer from "../../../components/Footer/footer";
import userNavbarDatas from '../../../components/Navbar/navbarData';
import adminNavbarLinks from '../../../components/Navbar/navbarData'; 

import OfferImg from '../../../assets/images/signup.gif';

const UserHomePage = () => {
    // const userRole = 'user';
  return (
    <>
    <div className="flex flex-col dark:text-white">
      <Navbar links={userNavbarDatas} />
      <div className="flex flex-row">
      <div className="w"> <Sidebar links={adminNavbarLinks}/></div>
      <div className="flex flex-col">
        <h1 className="px-7 pt-5 pb-3 text-2xl font-semibold">Hello Jegathees,Good Morning....</h1>
        <div className="flex">
          <div className="  p-4 ">
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
          </div>
        </div>
        <div className="mt-2 p-4">
          <h1 className="text-5xl font-semibold">Offers</h1>
          <div className="border-2 rounded-md p-2 mt-9 flex flex-col w-1/2">
            <img className="rounded-xl h-30  object-cover" src={OfferImg} alt="offerimg" />
            <h2 className="py-4 px-2">Offer Name</h2>

          </div>
        </div>

      </div>
      </div>
    <Footer />
    </div>
    </>
  );
};

export default UserHomePage;
