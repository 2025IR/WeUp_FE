import { fetchTeamMembers } from "@/apis/team/team";
import { useQuery } from "@tanstack/react-query";

export const useGetMembers = (project_id: number) => {
  return useQuery({
    queryKey: ["memberList", project_id],
    queryFn: () => fetchTeamMembers(project_id),
  });
};
