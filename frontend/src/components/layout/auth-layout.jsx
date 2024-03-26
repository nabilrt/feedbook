import { Outlet } from "react-router-dom";
import AuthNavBar from "../../inc/auth-nav";
import useDetails from "../../hooks/use-details";
import AuthSidebar from "../../inc/auth-sidebar";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";

const AuthLayout = () => {
  const { user, isLoading, error } = useDetails();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col h-screen bg-blue-50 font-[Montserrat]">
      <AuthNavBar user={user} />
      <div className="flex flex-grow">
        <AuthSidebar />
        <div className="flex-grow overflow-y-auto">
          <Outlet />
        </div>
        <div className="w-1/5 h-full overflow-y-auto px-2 pt-2">
          <div className="card">
            <div className="flex flex-col space-y-3">
              <p className="text-xl tracking-wider font-semibold">Friends</p>
              <input
                type="text"
                name=""
                id=""
                className="search-input"
                placeholder="Search for friends..."
              />
              <p className="text-gray-400 font-semibold text-sm">Friend List</p>
              <div className="flex items-center space-x-4 w-[315px]  p-2">
                <img src={avatar2} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Farhan Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2 ">
                <img src={avatar1} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Arpita Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2">
                <img src={avatar2} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Joy Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2 ">
                <img src={avatar1} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Riya Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2 ">
                <img src={avatar1} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Priotu Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2">
                <img src={avatar2} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Rayhan Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2 ">
                <img src={avatar1} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Sazin Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px]  p-2">
                <img src={avatar2} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Tip Islam</p>
                  <p className="text-xs cursor-pointer hover:underline">View Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
