import { deleteProject } from "@/apis/project/project";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useDeleteProject = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (projectId: number) => deleteProject(projectId),
    onSuccess,
    onError,
  });
};
