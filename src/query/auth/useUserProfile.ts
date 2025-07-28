import { getUserProfile } from "@/apis/auth/auth";
import { useQuery } from "@tanstack/react-query";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    staleTime: Infinity,
  });
};
