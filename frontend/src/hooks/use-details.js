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

  console.log(userData); // Corrected from data to userData

  return { user: userData?.user, isLoading, error }; // Added null check for userData
};

export default useDetails;
