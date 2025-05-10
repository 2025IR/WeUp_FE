import { createProject } from "@/apis/project/project";
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
    mutationFn: (data: FormData) => createProject(data),
    onSuccess,
    onError,
  });
};
