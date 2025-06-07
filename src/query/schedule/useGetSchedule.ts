import { getSchedules } from "@/apis/schedule/schedule";
import { useQuery } from "@tanstack/react-query";

export const useGetSchedule = (project_id: number) => {
  return useQuery({
    queryKey: ["teamSchedule", project_id],
    queryFn: () => getSchedules(project_id),
    enabled: project_id > 0,
  });
};
