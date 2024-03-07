
import Skeleton from 'react-loading-skeleton';

const LoginSkeleton = () => {
  return (
    <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-regal-blue m-auto">
      <form>
        {/* Skeleton for input fields */}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-steel-900 dark:text-white">
            <Skeleton height={20} width={100} />
          </label>
          <Skeleton height={40} />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <Skeleton height={20} width={100} />
          </label>
          <Skeleton height={40} />
        </div>
        {/* Skeleton for login button */}
        <Skeleton height={40} width={200} />
      </form>
    </div>
  );
};

export default LoginSkeleton;
