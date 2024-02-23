import React,{Suspense} from "react";

import Navbar from "../../../components/Navbar/navbar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
// import ViewRecharge from "../../../components/Recharge/viewrecharge";

const LazyViewRecharge = React.lazy(() => import('../../../components/Recharge/viewrecharge'));

const ViewrechargePage = () => {
    return (
        <div className="flex flex-col">
            <div>
                <Navbar  links={userNavbarDatas}/>
            </div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyViewRecharge />
                </Suspense>
                {/* <ViewRecharge /> */}
            </div>
            
        </div>
    );
}

export default ViewrechargePage;
