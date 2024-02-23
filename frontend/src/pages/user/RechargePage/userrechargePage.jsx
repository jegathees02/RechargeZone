import React,{Suspense} from "react";

import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
// import Recharge from "../../../components/Recharge/recharge";
import { userSidebarLinks } from "../../../components/sidebar/sidebardata";

const LazyRecharge = React.lazy(() => import('../../../components/Recharge/recharge'));

const UserrechargePage = () => {
    return (
        <>
        <div className="flex flex-col">
            <div>
            <Navbar links={userNavbarDatas} />  
            </div>
            <div className="flex ">
                <div>
                    <Sidebar links={userSidebarLinks} />
                </div>
                <div className="flex-1 px-10" >
                    <Suspense fallback = {<div>Loading...</div>}>
                        <LazyRecharge />
                    </Suspense>
                    {/* <Recharge /> */}
                </div>
            </div>
            
        </div>
        </>
    );
}

export default UserrechargePage;
