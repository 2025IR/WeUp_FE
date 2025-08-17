import { updateProjectDescription } from "@/apis/project/project";
import { useMutation } from "@tanstack/react-query";

export const useUpdateDescription = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      description,
    }: {
      projectId: number | null;
      description: string;
    }) => updateProjectDescription(projectId!, description),
  });
};
