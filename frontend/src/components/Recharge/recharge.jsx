  /* eslint-disable react/prop-types */
  // import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  // import { Carousel } from 'react-responsive-carousel';
  import PropTypes from 'prop-types';
  // import { Link } from 'react-router-dom';
  // import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  // import Rechargecard from '../Cards/Rechargecards/rechargecard';
  import Userrechargecard from '../Cards/Rechargecards/userrechargecard';
import { useEffect,useState } from 'react';
import UserService from '../../Services/UserService';
  // import "slick-carousel/slick/slick.css";
  // import "slick-carousel/slick/slick-theme.css";

  // const offerList = [
  //     {
  //       id : 1,
  //       price: "₹ 1499",
  //       validity: "2 Months",
  //       subscription: "Disney Hotstar",
  //       benefits: "Truly Unlimited",
  //       link: "#",
  //     },
  //     {
  //       id : 2,
  //       price: "₹ 999",
  //       validity: "1 Month",
  //       subscription: "Amazon Prime",
  //       benefits: "High-Speed Internet",
  //       link: "#",
  //     },
  //     {
  //         id : 3,
  //         price: "₹ 799",
  //         validity: "2 Months",
  //         subscription: "Disney Hotstar",
  //         benefits: "Truly Unlimited",
  //         link: "#",
  //       },
  //       {
  //         id : 4,
  //         price: "₹ 299",
  //         validity: "1 Month",
  //         subscription: "Amazon Prime",
  //         benefits: "High-Speed Internet",
  //         link: "#",
  //       },
  //       {
  //         id : 5,
  //         price: "₹ 1499",
  //         validity: "2 Months",
  //         subscription: "Disney Hotstar",
  //         benefits: "Truly Unlimited",
  //         link: "#",
  //       },
  //       {
  //         id : 6,
  //         price: "₹ 999",
  //         validity: "1 Month",
  //         subscription: "Amazon Prime",
  //         benefits: "High-Speed Internet",
  //         link: "#",
  //       },
  //     // Add more offers as needed
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4, // Adjust based on the number of items
  //   slidesToScroll: 1
  // };

  const Recharge = () => {

    const [gb1, setGb1] = useState([]);
    const [gb1_5,setGb1_5] = useState([]);
    const [gb2,setGb2] = useState([]);
    // const [gb1_5, setGb1_5] = useState([]);
    // const [gb2, setGb2] = useState([]);

    // const handle = () => {

    // }

    useEffect(() => {
      const fetchPlans = async() => {
        try{

          const response = await UserService.rechageplans(localStorage.getItem('token'), JSON.parse(localStorage.getItem('userData')).serviceProvider,"1", JSON.parse(localStorage.getItem('userData')).city);
          setGb1(response.data);
          const response1_5 = await UserService.rechageplans(localStorage.getItem('token'),JSON.parse(localStorage.getItem('userData')).serviceProvider,'1.5',JSON.parse(localStorage.getItem('userData')).city);
          setGb1_5(response1_5.data);
          const response2 = await UserService.rechageplans(localStorage.getItem('token'),JSON.parse(localStorage.getItem('userData')).serviceProvider,"2",JSON.parse(localStorage.getItem('userData')).city);
          setGb2(response2.data);
        }
        catch(e) {
          // alert();
          console.log(e);
        }
      }
      fetchPlans();
      // const userData  =  localStorage.getItem('userData');
      // setGb1(UserService.rechageplans(localStorage.getItem('token'), "jio","unlimited", "prepaid"));
      // console.log(UserService.rechageplans(localStorage.getItem('token'),"unlimited", "jio", "prepaid"));
      // setGb2(UserService.rechageplans(localStorage.getItem('token'),"unlimited", userData.serviceProvider, "prepaid"));
    }, []);
    return (
      <div className='w-fit flex flex-col font-serif dark:bg-gray-900 bg-white'>
        {console.log(gb1)};
        {/* <div className="py-4">
          <h1 className="text-2xl font-bold text-white">1 GB/Day plan</h1>
        </div> */}
        
        <div className='py-3'>
          <div>
            <h2 className='text-2xl font-bold text-green-500 dark:text-white'>1 GB/Day plan:</h2>
          </div>
          <div className='py-2'>
            <Userrechargecard offerlists={gb1} />
            {/* <Rechargecard offerlists={offerList} /> */}
          </div>
        </div>
        <div className='py-3'>
          <div>
            <h2 className='text-2xl font-bold text-green-500 dark:text-white'>1.5 GB/Day plan:</h2>
          </div>
          <div className='py-2'>
            <Userrechargecard offerlists={gb1_5} />
            {/* <Rechargecard offerlists={offerList} /> */}
          </div>
        </div>
        <div className='py-3'>
          <div>
            <h2 className='text-2xl font-bold text-green-500 dark:text-white'>2 GB/Day plan:</h2>
          </div>
          <div className='py-2'>
            <Userrechargecard offerlists={gb2} />
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
