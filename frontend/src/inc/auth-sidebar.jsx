import useDetails from "../hooks/use-details";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
const AuthSidebar = () => {
  const { user } = useDetails();

  return (
    <div className="w-1/5 h-full px-4 pt-2">
      <div className="card">
        <div className="flex flex-col space-y-3 justify-center items-center ">
          <img src={user.avatar} alt="" height={120} width={120} />
          <p className="text-lg font-semibold tracking-wider">{user.name}</p>
          <p className="text-sm tracking-wider">{user.email}</p>
          <div className="flex space-x-3">
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">{user.friends.length}</p>
              <p className="text-sm">Friends</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">
                {user.friendRequests.length}
              </p>
              <p className="text-sm">Requests</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">0</p>
              <p className="text-sm">Posts</p>
            </div>
          </div>
          <button className="button-style w-1/2 m-auto text-sm">
            View Profile
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="card">
          <div className="flex flex-col">
            <p className="font-semibold text-base">Friend Suggestions</p>
            <div className="mt-2 flex flex-col space-y-2 h-96 overflow-y-auto">
              <div className="flex items-center space-x-4 w-[315px] border border-gray-100 shadow-md rounded-md p-2">
                <img src={avatar2} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Farhan Islam</p>
                  <p className="text-xs">2 mutual friends</p>
                  <div className="flex space-x-1">
                    <button className="button-style text-xs">Add Friend</button>
                    <button className="button-style-secondary text-xs">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-[315px] border border-gray-100 shadow-md rounded-md p-2">
                <img src={avatar1} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 w-full">
                  <p className="text-sm font-semibold">Arpita Datta</p>
                  <p className="text-xs">4 mutual friends</p>
                  <div className="flex space-x-1 ">
                    <button className="button-style text-xs">Add Friend</button>
                    <button className="button-style-secondary text-xs">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSidebar;
