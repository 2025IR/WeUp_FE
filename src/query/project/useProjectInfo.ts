import { getProjectInfo } from "@/apis/project/project";
import { useQuery } from "@tanstack/react-query";

export const useProjectInfo = (project_id: number | null) => {
  return useQuery({
    queryKey: ["projectInfo", project_id],
    queryFn: () => getProjectInfo(project_id!),
    enabled: project_id != null,
  });
};
