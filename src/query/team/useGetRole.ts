import { fetchRoleList } from "@/apis/team/team";
import { useQuery } from "@tanstack/react-query";

export const useGetRole = (projectId: number) => {
  return useQuery({
    queryKey: ["roleList", projectId],
    queryFn: () => fetchRoleList(projectId),
  });
};
