import { createProject } from "@/apis/project/project";
import { ProjectCreateRequest } from "@/types/project";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreateProject = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation({
    mutationFn: (data: ProjectCreateRequest) => createProject(data),
    onSuccess,
    onError,
  });
};
