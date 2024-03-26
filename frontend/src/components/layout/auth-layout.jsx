import { Outlet } from "react-router-dom";
import AuthNavBar from "../../inc/auth-nav";
import useDetails from "../../hooks/use-details";

const AuthLayout = () => {
  const { user, isLoading, error } = useDetails();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col  ">
      <AuthNavBar user={user} />
      <div className="flex-grow px-4 flex  mt-2">
        <div className="w-1/5 flex flex-col space-y-3">
          <p className="text-xl tracking-wider font-semibold">SideBar</p>
        </div>
        <Outlet />
        <div className="w-1/5 flex flex-col space-y-3">
          <p className="text-xl tracking-wider font-semibold">Friends</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
