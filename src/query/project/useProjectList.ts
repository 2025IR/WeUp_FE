import { getProjectList } from "@/apis/project/project";
import { ProjectType } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useProjectList = () => {
  return useQuery<ProjectType[], AxiosError>({
    queryKey: ["projectList"],
    queryFn: () => getProjectList(),
  });
};
