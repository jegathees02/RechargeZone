import simCard from '../../assets/images/simcard_bgremove.gif';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='flex  bg-gray-900'>
            <div>
            <img className='p-10 bg-gray-900 ' src={simCard} alt="Sim Card" />
            </div>
            <div className='p-7'>
                <h1 className='font-madimi text-6xl  text-green-200 py-5 '>RechargeZone</h1>
                <p className='text-3xl dark: text-white pb-5'> Easy Pay through one  click</p>

                
                <Link to="/login"><button  className='bg-blue-400 rounded-md py-2 px-6'>
                    Get into
                </button></Link>


            </div>
            
        </div>
    );
}

export default Landing;
