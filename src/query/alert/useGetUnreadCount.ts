import { useQuery } from "@tanstack/react-query";
import { getUnreadCount } from "@/apis/alert/alert";

export const useGetUnreadCount = () => {
  return useQuery({
    queryKey: ["unreadCount"],
    queryFn: () => getUnreadCount(),
  });
};
