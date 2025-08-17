import { fetchRoleList } from "@/apis/team/team";
import { useQuery } from "@tanstack/react-query";

export const useGetRole = (project_id: number | null) => {
  return useQuery({
    queryKey: ["roleList", project_id],
    queryFn: () => fetchRoleList(project_id),
    enabled: !!project_id,
  });
};
