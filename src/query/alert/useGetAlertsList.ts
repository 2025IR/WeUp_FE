import { useQuery } from "@tanstack/react-query";
import { getAlertsList } from "@/apis/alert/alert";

export const useGetAlertsList = () => {
  return useQuery({
    queryKey: ["alertsList"],
    queryFn: () => getAlertsList(),
  });
};
