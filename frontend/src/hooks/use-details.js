import { useQuery } from "@tanstack/react-query";
import { userDetails } from "../api/auth-apis";

const useDetails = () => {
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: userDetails,
  });

  return { user: userData?.user, isLoading, error }; 
};

export default useDetails;
