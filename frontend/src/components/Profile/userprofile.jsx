import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Userprofile = ({ user }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">First Name:</label>
              <span className="bg-gray-300 py-2 px-4 rounded-md text-gray-800">{user.firstName}</span>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Last Name:</label>
              <span className="bg-gray-300 py-2 px-4 rounded-md text-gray-800">{user.lastName}</span>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">phone Number:</label>
              <span className="bg-gray-300 py-2 px-4 rounded-md text-gray-800">{user.email}</span>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Service Provider</label>
              <span className="bg-gray-300 py-2 px-4 rounded-md text-gray-800">{user.email}</span>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Email:</label>
              <span className="bg-gray-300 py-2 px-4 rounded-md text-gray-800">{user.email}</span>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Password:</label>
              <span className="bg-gray-300 py-2 px-4 rounded-md text-gray-800">{user.email}</span>
            </div>
            {/* Add more user details here */}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/user/profile/edit"
              className="text-blue-600 hover:underline"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Userprofile.propTypes = {
  user: PropTypes.array.isRequired, // Or use PropTypes.arrayOf(PropTypes.shape({ ... })) for specific structure
};



export default Userprofile;