import { updateProject } from "@/apis/project/project";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useUpdateProject = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation({
    mutationFn: ({ projectId, data }: { projectId: number; data: FormData }) =>
      updateProject(projectId, data),
    onSuccess,
    onError,
  });
};
