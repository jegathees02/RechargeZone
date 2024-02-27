// import React from 'react'; 
import rechargeOthersImg from '../../assets/images/rechargeOther1.gif';  

const Rechargeother = () => {
    return (
        <div className="bg-green-700 min-h-[60%] flex justify-center items-center">
            <div className="shadow-xl border-4 border-red-500 rounded-2xl bg-green-50 py-3 -px-3 flex flex-col sm:flex-row">
                <div className="flex justify-center mb-6 sm:mb-0 sm:mr-6">
                    <img className="w-1 h-full sm:w-full object-cover object-center" src={rechargeOthersImg} alt="recharge for friend" />
                </div>
                <div className="flex flex-col justify-center">
                    <form>
                        <h1 className="text-lg font-bold mb-4">Recharge for your friend...</h1>
                        <h1 className="text-lg">Share your love with recharges</h1>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Rechargeother;
