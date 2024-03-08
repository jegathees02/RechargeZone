  /* eslint-disable react/prop-types */
  // import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  // import { Carousel } from 'react-responsive-carousel';
  import PropTypes from 'prop-types';
  import { Link } from 'react-router-dom';
  // import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  // import Rechargecard from '../Cards/Rechargecards/rechargecard';
  import Userrechargecard from '../Cards/Rechargecards/userrechargecard';
import { useEffect,useState } from 'react';
import UserService from '../../Services/UserService';
  // import "slick-carousel/slick/slick.css";
  // import "slick-carousel/slick/slick-theme.css";

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
        {
          id : 5,
          price: "₹ 1499",
          validity: "2 Months",
          subscription: "Disney Hotstar",
          benefits: "Truly Unlimited",
          link: "#",
        },
        {
          id : 6,
          price: "₹ 999",
          validity: "1 Month",
          subscription: "Amazon Prime",
          benefits: "High-Speed Internet",
          link: "#",
        },
      // Add more offers as needed
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4, // Adjust based on the number of items
  //   slidesToScroll: 1
  // };

  const Recharge = () => {

    const [gb1, setGb1] = useState([]);
    // const [gb1_5, setGb1_5] = useState([]);
    // const [gb2, setGb2] = useState([]);

    // const handle = () => {

    // }

    useEffect(() => {
      const fetchPlans = async() => {
        try{
          const response = await UserService.rechageplans(localStorage.getItem('token'), "jio","unlimited", "prepaid");
          setGb1(response.data);
        }
        catch(e) {
          alert(e);
        }
      }
      fetchPlans();
      // const userData  =  localStorage.getItem('userData');
      // setGb1(UserService.rechageplans(localStorage.getItem('token'), "jio","unlimited", "prepaid"));
      // console.log(UserService.rechageplans(localStorage.getItem('token'),"unlimited", "jio", "prepaid"));
      // setGb2(UserService.rechageplans(localStorage.getItem('token'),"unlimited", userData.serviceProvider, "prepaid"));
    }, []);
    return (
      <div className='w-[1/3]flex flex-col font-serif'>
        {console.log(gb1)};
        <div className="py-4">
          <h1 className="text-2xl font-bold text-white">Popular Plans</h1>
        </div>
        <div className='grid grid-cols-4'>
            {gb1.map((offer, index) => (
              <div key={index} className=''>
                <div className="text-white border-2 rounded-xl p-2 w-[60%]  mt-2  dark:bg-gray-900">
                  <div className="flex justify-between py-2">
                    <div>
                      <h1 className="text-2xl font-bold text-[#01c293]">₹ {offer.planAmount}</h1>
                    </div>
                    <div className="flex flex-col">
                      <h1>Validity:</h1>
                      <h1>{offer.planValidity}</h1>
                    </div>
                  </div>
                  <div className="py-1">
                    <a href="" className="text-blue-600">View Details</a>
                  </div>
                  <div className="flex py-2 justify-between">
                    <div>
                      <h1>Validity: <br /> {offer.planValidity}</h1>
                    </div>
                    <div>
                      <h1 className='truncate'>Benefits :<br /> {offer.plansubscription}</h1>
                    </div>
                  </div>
                  <div className="py-2">
                    <h1>Subscriptions:</h1>
                    <h1>{offer.subscription}</h1>
                  </div>
                  <div className="py-4  justify-center items-center mx-auto">
                    <div className="py-4  justify-center items-center mx-auto">
                      <Link to={`/user/recharge/${index}`} className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">
                        Recharge
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* </Slider> */}
        </div>
        <div className='py-3'>
          <div>
            <h2 className='text-2xl font-bold text-green-500 dark:text-white'>2 GB/Day plan:</h2>
          </div>
          <div className='py-2'>
            <Userrechargecard offerlists={offerList} />
            {/* <Rechargecard offerlists={offerList} /> */}
          </div>
        </div>
      </div>
    );
  };


  Recharge.propTypes = {
    links: PropTypes.array.isRequired, // Or use PropTypes.arrayOf(PropTypes.shape({ ... })) for specific structure
  };

  export default Recharge;
