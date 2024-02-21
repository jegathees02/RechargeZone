

const Editprofile = () => {
    
    return (
        <>
        <div className="font-sans text-white bg-transparent grid grid-cols-3 h-3 gap-x-20  gap-y-20 justify-items-center ">
            <div className="border ">
                <div>
                    <h1>First Name:</h1>
                    <input className="dark:bg-gray-600 hover:border-gray-900" type="text"></input>
                </div>
            </div>
            <div className="border ">
                <div>
                    <h1>Last Name:</h1>
                    <input className="dark:bg-gray-600 hover:border-gray-900" type="text"></input>
                </div>
            </div>
            <div className="border ">
                <div>
                    <h1>Email:</h1>
                    <input className="dark:bg-gray-600 hover:border-gray-900" type="email"></input>
                </div>
            </div>
            <div className="border ">
                <div>
                    <h1>Password:</h1>
                    <input className="dark:bg-gray-600 hover:border-gray-900" type="password"></input>
                </div>
            </div>
            <div className="border ">
                <div>
                    <h1>Confirm Password:</h1>
                    <input className="dark:bg-gray-600 hover:border-gray-900" type="password"></input>
                </div>
            </div>
            <div>
              <button className="text-white border px-6 py-2 bg-blue-700 hover:bg-blue-600 rounded-md ">Update Profile</button>
            </div>

        </div>
        </>
    );
}

export default Editprofile;
